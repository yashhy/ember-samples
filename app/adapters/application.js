import DS from 'ember-data';

// with the below adapter "JSONAPIAdapter" it throws error,
// coz the data from the server i.e. mock should be in jsonapi specificaitons

// export default DS.JSONAPIAdapter.extend({
//   namespace: 'api'
// });

export default DS.RESTAdapter.extend({
  namespace: 'api' ,
  handleResponse(status, headers, payload) {
    return payload;
  }
});
