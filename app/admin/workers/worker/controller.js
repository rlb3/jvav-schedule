import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update_worker() {
      this.model.save().then(()=>{
        console.log('updated');
      });
    }
  }
});
