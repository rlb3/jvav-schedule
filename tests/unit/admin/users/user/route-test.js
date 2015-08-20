import { moduleFor, test } from 'ember-qunit';

moduleFor('route:admin/users/user', 'Unit | Route | admin/users/user', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
