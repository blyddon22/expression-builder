import Ember from 'ember';
import layout from '../templates/components/expression-builder';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout,

  criterion: computed(function() {
    return {
      'type1': ['value1', 'value2'],
      'type2': ['value3'],
    }
  }),

  types: computed(function() {
    return Object.keys(get(this, 'criterion'));
  }),

  blocks: computed(function() {
    // initial state for spike
    let a = {};
    a.id = Ember.guidFor({});
    a.selectedType = 'type1';
    a.selectedValue = 'value3';
    a.operator = 'and';
    let b = {};
    b.id = Ember.guidFor({});
    b.selectedType = 'type2';
    b.selectedValue = 'value5';
    return [a, b];
  }),

  expression: computed(function() {
    let blocks = get(this, 'blocks');
    let kv = blocks.map((block) => {
      let operator = block.operator ? block.operator : '';
      return `${block.selectedType}:${block.selectedValue} ${operator}`
    })
    let exp = kv.join(' ');
    return exp;
  })

});
