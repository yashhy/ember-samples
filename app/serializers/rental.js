import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    return payload;
  }
});
