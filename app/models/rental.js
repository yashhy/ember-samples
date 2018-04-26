import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr(),
  location : DS.attr(),
  city : DS.attr(),
  totalCompanies : DS.attr(),
  address : DS.attr()
  // id : DS.attr()  // you should not be including the ID, it threw me an error. Ember might be using it!@3!
});
