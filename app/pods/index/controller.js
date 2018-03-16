import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  firstDemo: computed('model', function () {
    return this.get('model').order[0];
  })
});
