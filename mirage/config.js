export default function() {
  this.namespace = '/api';

  this.get('/rentals', () => {
    return {
      data: [{
        name: 'Ascendas',
        location: 'Taramani',
        city: 'Chennai',
        totalCompanies: 5,
        id: 1
      }, {
        name: 'RMZ',
        location: 'MGR Salai',
        city: 'Chennai',
        totalCompanies: 15,
        id: 2
      }, {
        name: 'SP Info City',
        location: 'MGR Salai',
        city: 'Chennai',
        totalCompanies: 55,
        id: 3
      }]
    }
  });
}
