import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create_worker() {
      console.log(this.model);
      this.model.save().then(()=>{
        console.log('saved');
      });
    }
  }
});
