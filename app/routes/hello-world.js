import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      cryptos : ['Ripple', 'Ethereum', 'Litecoin', 'Tron'],
      techs: ['Angualr2', 'ReactJS', 'Ember JS']
    }
  }
});
