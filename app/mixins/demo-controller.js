import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Mixin.create({
/*
  remainingAttempts: keeps track of remaining attempts
  image: reference to image
  adjective; noun; verb: The pieces of the password for the route
  order: order for routes
  confirmedAdjective; confirmedNoun; confirmedVerb: this will confirm the entry from the user
  tryAgain: dependent on how many attempts you have left this will allow you to try again
  lockedOut: true if you are out of attempts
  wordNotSelected: true if any of your words are wrong
*/
  remainingAttempts: 2,

  image: computed.alias('model.password.image'),

  adjective: computed.alias('model.password.adjective'),

  noun: computed.alias('model.password.noun'),

  verb: computed.alias('model.password.verb'),

  order: computed.alias('model.order'),

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

  tryAgain: computed('loginSuccess', 'remainingAttempts', function() {
    const success = this.get('loginSuccess');
    const remainingAttempts = this.get('remainingAttempts');
    return success === false && remainingAttempts > 0;
  }),

  lockedOut: computed('loginSuccess', 'remainingAttempts', function() {
    const success = this.get('loginSuccess');
    const remainingAttempts = this.get('remainingAttempts');
    return success === false && remainingAttempts === 0;
  }),

  wordNotSelected: computed('selectedAdjective', 'selectedNoun', 'selectedVerb', function() {
    return !(this.get('selectedAdjective') && this.get('selectedNoun') && this.get('selectedVerb'));
  }),

  actions: {
    login () {
      let loginSuccess = this.get('confirmedAdjective') && this.get('confirmedNoun') && this.get('confirmedVerb');
      this.set('loginSuccess', loginSuccess);
      $.post('/api/submit-authenticate-password', JSON.stringify({
        account: this.get('account')
      }));
      $.post('/api/authenticate-password', JSON.stringify({success: loginSuccess, account: this.get('account')}));
    },
    tryAgain () {
      const remainingAttempts = this.get('remainingAttempts');
      this.set('remainingAttempts', remainingAttempts - 1);
      this.set('loginSuccess', null);

      this.set('selectedAdjective', null);
      this.set('selectedNoun', null);
      this.set('selectedVerb', null);
    },
    moveOn () {
      const order = this.get('order');
      const account = this.get('account') +1;
      const index = order.indexOf(account);
      this.transitionToRoute(index + 1 === order.length ? 'index' : `demo${this.get('model').order[index+1]}`);
    }
  }
});
