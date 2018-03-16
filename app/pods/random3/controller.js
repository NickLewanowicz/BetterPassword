import Controller from '@ember/controller';
import RandomController from '../../mixins/random-controller'

export default Controller.extend(RandomController, {
  account: 3,
});
