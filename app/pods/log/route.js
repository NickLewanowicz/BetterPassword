import Route from '@ember/routing/route';

import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    return RSVP.hash({
      events: $.getJSON('/api/events')
    });
  }
});
