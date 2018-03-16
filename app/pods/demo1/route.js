import Route from '@ember/routing/route';

import DemoRoute from '../../mixins/demo-route'

export default Route.extend(DemoRoute, {
  account: 1
});
