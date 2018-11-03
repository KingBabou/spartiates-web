import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | equipes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:equipes');
    assert.ok(route);
  });
});
