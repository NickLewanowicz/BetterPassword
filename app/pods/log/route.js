import Route from '@ember/routing/route';
import moment from 'moment'
import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    return RSVP.hash({
      events: $.getJSON('/api/events')
    }).then(events => {
      this.store.createRecord('log', {
        id: moment.now(),
        dataset:events
      }).save()
    });
  }
});
