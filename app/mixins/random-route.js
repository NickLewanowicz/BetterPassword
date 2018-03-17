import Mixin from '@ember/object/mixin';

import $ from 'jquery';
import RSVP from 'rsvp';

export default Mixin.create({
  model () {
    $.post('/api/create-password');
    return RSVP.hash({
      adjectives: $.getJSON('/api/adjectives'),
      nouns: $.getJSON('/api/nouns'),
      verbs: $.getJSON('/api/verbs'),
      order: $.getJSON('/api/order')
    });
  },
  actions: {
    doTransition: function() {
      this.controller.set('selectedAdjective', null);
      this.controller.set('selectedNoun', null);
      this.controller.set('selectedVerb', null);
    }
  }
});
