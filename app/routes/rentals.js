import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return[{
      name: 'Ascendas IT Park',
      location: 'Taramani',
      city: 'Chennai',
      totalCompanies: 5,
      address: 'CSIR Road, Taramani, Chennai, Tamil Nadu 600113',
      id: 1
    }, {
      name: 'RMZ',
      location: 'MGR Salai',
      city: 'Chennai',
      totalCompanies: 15,
      address: '11, MGR Main Rd, Chennai, Tamil Nadu 600113',
      id: 2
    }, {
      name: 'SP Info City',
      location: 'MGR Salai',
      city: 'Chennai',
      totalCompanies: 55,
      address: 'No.40, MGR Nedunchalai South, Kandanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
      id: 3
    }]
  }
});
