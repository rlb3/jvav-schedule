import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('users', function() {
      this.route('new');
      this.route('user');
    });
    this.route('workers', function() {
      this.route('new');
      this.route('worker', { path: '/workers/:worker_id' });
    });
  });
});

export default Router;
