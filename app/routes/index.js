import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        item: 'Roger Rabbit',
        value: 'RR'
      },
      {
        item: 'Barney Rubble',
        value: 'BR'
      }
    ]
  }
})
