import Controller from '@ember/controller';
import DemoController from '../../mixins/demo-controller'

export default Controller.extend(DemoController, {
  account: 1
});
