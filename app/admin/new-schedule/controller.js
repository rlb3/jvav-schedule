import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    didMakeSelection(selection, component) {
      console.log(selection, component.get('default'));
      this.model.schedule.set(component.get('default'), selection);
    },
    create_schedule() {
      this.model.schedule.save().then(() => {
        console.log('saved');
      });
    }
  }
});
