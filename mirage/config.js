export default function() {
  this.namespace = '/api';

  this.get('/rentals', () => {
    return {
      data: [
        {
          type: 'rental',
          id: 1,
          attributes: {
            name: 'Ascendas',
            location: 'Taramani',
            city: 'Chennai',
            totalCompanies: 5
          }
        }, {
          type: 'rental',
          id: 2,
          attributes: {
            name: 'RMZ',
            location: 'MGR Salai',
            city: 'Chennai',
            totalCompanies: 15
          }
        }, {
          type: 'rental',
          id: 3,
          attributes: {
            name: 'SP Info City',
            location: 'MGR Salai',
            city: 'Chennai',
            totalCompanies: 55
          }
        }
      ]
    }

    // return [{
    //   type: 'rental',
    //   name: 'Ascendas IT Park',
    //   location: 'Taramani',
    //   city: 'Chennai',
    //   totalCompanies: 5,
    //   address: 'CSIR Road, Taramani, Chennai, Tamil Nadu 600113',
    //   id: 1
    // }, {
    //   type: 'rental',
    //   name: 'RMZ',
    //   location: 'MGR Salai',
    //   city: 'Chennai',
    //   totalCompanies: 15,
    //   address: '11, MGR Main Rd, Chennai, Tamil Nadu 600113',
    //   id: 2
    // }, {
    //   type: 'rental',
    //   name: 'SP Info City',
    //   location: 'MGR Salai',
    //   city: 'Chennai',
    //   totalCompanies: 55,
    //   address: 'No.40, MGR Nedunchalai South, Kandanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
    //   id: 3
    // }]
  });
}
