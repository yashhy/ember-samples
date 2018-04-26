export default function() {
  this.namespace = '/api';

  let rentals = [
    {
      type: 'rental',
      id: 1,
      attributes: {
        name: 'Ascendas',
        location: 'Taramani',
        city: 'Chennai',
        address: 'CSIR Road, Taramani, Chennai, Tamil Nadu 600113',
        totalCompanies: 5
      }
    }, {
      type: 'rental',
      id: 2,
      attributes: {
        name: 'RMZ',
        location: 'MGR Salai',
        city: 'Chennai',
        address: '11, MGR Main Rd, Chennai, Tamil Nadu 600113',
        totalCompanies: 15
      }
    }, {
      type: 'rental',
      id: 3,
      attributes: {
        name: 'SP Info City',
        location: 'MGR Salai',
        city: 'Kanchipuram',
        address: 'No.40, MGR Nedunchalai South, Kandanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
        totalCompanies: 55
      }
    }, {
      type: 'rental',
      id: 4,
      attributes: {
        name: 'Tidel Park',
        location: 'Thiruvanmaiyur',
        city: 'Thiruvanmaiyur',
        address: 'Rajiv Gandhi IT Expy, Taramani, Chennai, Tamil Nadu 600113',
        totalCompanies: 55
      }
    }
  ];

  this.get('/rentals', (db, request) => {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}
