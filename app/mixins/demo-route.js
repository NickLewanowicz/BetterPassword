import Mixin from '@ember/object/mixin';

import $ from 'jquery';
import RSVP from 'rsvp';

export default Mixin.create({
  /*
    Model represents the loaded state from the backend
    WillTransition will reset the words on page change
  */

  model () {
    $.post('/api/start-authenticate-password');
    return RSVP.hash({
      adjectives: $.getJSON('/api/adjectives'),
      nouns: $.getJSON('/api/nouns'),
      verbs: $.getJSON('/api/verbs'),
      order: $.getJSON('/api/order'),
      password: $.getJSON(`/api/get-password-${this.get('account')}`)
    });
  },
  actions: {
    willTransition: function() {
      this.controller.set('selectedAdjective', null);
      this.controller.set('selectedNoun', null);
      this.controller.set('selectedVerb', null);
    }
  }
});
