import Route from '@ember/routing/route';
import moment from 'moment'
import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  //The following will request the event log from the 
  //backend and save it to our logs
  model () {
    RSVP.hash({
      events: $.getJSON('/api/events')
    }).then(events => {
      this.store.createRecord('log', {
        id: moment.now(),
        dataset:events
      }).save()
    });
    return RSVP.hash({
      events: $.getJSON('/api/events')
    }); 
  }
});
