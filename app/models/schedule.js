import DS from 'ember-data';

export default DS.Model.extend({
  scheduledDate: DS.attr('date'),
  audio: DS.attr('string'),
  video: DS.attr('string'),
  alternate: DS.attr('string')
});
