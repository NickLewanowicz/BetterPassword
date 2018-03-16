import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import $ from 'jquery';

const MAX_IMAGE_ID = 1084;
const missingIDs = [86, 97, 105, 138, 148, 150, 205, 207, 224, 226, 245, 246, 262,
                    285, 286, 298, 303, 332, 333, 346, 359, 394, 414, 422, 438, 462,
                    463, 470, 489, 540, 561, 578, 587, 589, 592, 595, 597, 601, 624,
                    632, 636, 644, 647, 673, 697, 706, 707, 708, 709, 710, 711, 712,
                    713, 714, 720, 725, 734, 745, 746, 747, 748, 749, 750, 751, 752,
                    753, 754, 759, 761, 762, 763, 771, 792, 801, 812, 843, 850, 854,
                    895, 897, 917, 920, 956, 963, 1007, 1034, 1046
                  ];

const getRandomImage = () => {
  let id = Math.floor(Math.random() * MAX_IMAGE_ID);
  while (missingIDs.contains(id)) {
    id = Math.floor(Math.random() * MAX_IMAGE_ID);
  }
  return id;
}

export default Mixin.create({

  image: computed('model', function() {
    return getRandomImage();
  }),

  adjective: computed('model', function() {
    const adjectives = this.get('model').adjectives;
    return adjectives[Math.floor(Math.random() * adjectives.length)];
  }),

  noun: computed('model', function() {
    const nouns = this.get('model').nouns;
    return nouns[Math.floor(Math.random() * nouns.length)];
  }),

  verb: computed('model', function() {
    const verbs = this.get('model').verbs;
    return verbs[Math.floor(Math.random() * verbs.length)];
  }),

  password: computed('adjective', 'noun', 'verb', 'image', function() {
    return {
      adjective: this.get('adjective'),
      noun: this.get('noun'),
      verb: this.get('verb'),
      image: this.get('image')
    };
  }),

  confirmedAdjective: computed('adjective', 'selectedAdjective', function() {
    const selectedAdjective = this.get('selectedAdjective');
    const adjective = this.get('adjective');
    return selectedAdjective && adjective && adjective.id === selectedAdjective.id;
  }),

  confirmedNoun: computed('noun', 'selectedNoun', function() {
    const selectedNoun = this.get('selectedNoun');
    const noun = this.get('noun');
    return selectedNoun && noun && noun.id === selectedNoun.id;
  }),

  confirmedVerb: computed('verb', 'selectedVerb', function() {
    const selectedVerb = this.get('selectedVerb');
    const verb = this.get('verb');
    return selectedVerb && verb && verb.id === selectedVerb.id;
  }),

  disableAccept: computed('confirmedAdjective', 'confirmedNoun', 'confirmedVerb', function() {
    return !(this.get('confirmedAdjective') && this.get('confirmedNoun') && this.get('confirmedVerb'));
  }),

  actions: {
    accept () {
      const account = this.get('account');
      $.post(`/api/submit-password-${account}`, JSON.stringify(this.get('password')));
      if (account === 3) {
        this.transitionToRoute('index');
      } else {
        this.transitionToRoute(`random${account + 1}`);
      }
    }
  }
});
