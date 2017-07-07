import Ember from 'ember';
import layout from '../templates/components/expression-block';

const { computed, get, isPresent } = Ember;

export default Ember.Component.extend({
  layout,
  horizontalOperation: computed(function() {
    let op = get(this, 'block.operator');
    if (isPresent(op) === true) {
      return `expression-${op}`
    }
    return undefined;
  }),
});
