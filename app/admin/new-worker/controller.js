import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: '',
  lastName: '',
  email: '',
  clear() {
    this.set('firstName', '');
    this.set('lastName', '');
    this.set('email', '');
  },
  actions: {
    create_worker() {
      console.log(this.model);
      var model = this.store.createRecord('worker', { firstName: this.get('firstName'),
                                                      lastName: this.get('lastName'),
                                                      email: this.get('email') } );
      model.save().then(()=>{
        this.clear();
        console.log('saved');
      });
    }
  }
});
