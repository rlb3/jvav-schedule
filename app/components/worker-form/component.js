import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAction() {
      this.sendAction();
    }
  }
});
