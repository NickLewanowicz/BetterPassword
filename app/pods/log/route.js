import Route from '@ember/routing/route';
import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  //The following will request the event log from the backend
  model () {
    return RSVP.hash({
      events: $.getJSON('/api/events')
    });
  }
});
