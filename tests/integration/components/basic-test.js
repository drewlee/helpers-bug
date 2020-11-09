import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | basic', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.quote = await getData();

    this.setProperties({
      quote: 'Never leave that till tomorrow which you can do today.',
      author: '- Benjamin Franklin'
    });
    await render(hbs`<Basic @quote={{quote}} @author={{author}}/>`);

    assert.dom('.bc-quote').exists();
    assert.dom('.bc-author').exists();
    assert.dom('.bc-quote').hasText('Never leave that till tomorrow which you can do today.');
    assert.dom('.bc-author').hasText('- Benjamin Franklin');
  });
});
