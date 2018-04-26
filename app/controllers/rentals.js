import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(inputVal) {
      if (inputVal) {
        return this.get('store').query('rental', {
           city: inputVal
         }).then(results => results);
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
