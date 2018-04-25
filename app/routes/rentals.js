import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return[{
      name: 'Ascendas',
      location: 'Taramani',
      city: 'Chennai',
      id: 1
    }, {
      name: 'RMZ',
      location: 'MGR Salai',
      city: 'Chennai',
      id: 2
    }, {
      name: 'SP Info City',
      location: 'MGR Salai',
      city: 'Chennai',
      id: 3
    }]
  }
});
