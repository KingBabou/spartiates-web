import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | entrainements', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:entrainements');
    assert.ok(route);
  });
});
