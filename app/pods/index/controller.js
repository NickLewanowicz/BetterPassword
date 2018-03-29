import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  //We define the first demo page to be the first index 
  //of the api request made in `index/route`
  firstDemo: computed('model', function () {
    return this.get('model').order[0];
  })
});
