import Route from '@ember/routing/route';

import $ from 'jquery';
import RSVP from 'rsvp';

export default Route.extend({
  //The following will request the service order from the server
  model () {
    return RSVP.hash({
      order: $.getJSON('/api/order')
    });
  }
});
