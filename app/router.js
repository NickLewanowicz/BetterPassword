import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('random1');
  this.route('random2');
  this.route('random3');
  this.route('demo1');
  this.route('demo2');
  this.route('demo3');
  this.route('log');
});

export default Router;
