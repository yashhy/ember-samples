import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fresh-desk', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fresh-desk');
    assert.ok(route);
  });
});
