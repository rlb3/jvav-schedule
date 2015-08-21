import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var store = this.store;
    return Ember.RSVP.hash({
      schedule: store.createRecord('schedule'),
      workers: store.find('worker')
    });
  }
});
