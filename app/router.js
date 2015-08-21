import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('workers');
    this.route('new_worker', { path: '/workers/new' });
    this.route('worker', { path: '/workers/:worker_id' });
    this.route('new_schedule', { path: 'schedule/new'});
  });
  this.route('schedule', { path: '/'});
});

export default Router;
