const CompanyService = require("../service/companyService");
const model = require("../model/CompanyModel");

test('able to create', () => {
    
    let data = { guid: 'guid', 
        company_name: 'FunFun', first_name: 'Ted', 
        last_name: 'GeoCity', address: '123 Apple', 
        email: 'geo@geocity.com'
    };
    var ans = CompanyService.create(data);
    expect(ans).toBeInstanceOf(model);
  });
