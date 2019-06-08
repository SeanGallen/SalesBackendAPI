const CompanyService = require("../service/companyService");
const model = require("../model/CompanyModel");
let company;
beforeEach(() => {
    let data = { guid: 'guid', 
    company_name: 'FunFun', first_name: 'Ted', 
    last_name: 'GeoCity', address: '123 Apple', 
    email: 'geo@geocity.com'
    };
    company = CompanyService.create(data);
  });

test('able to create', () => {
    expect(company).toBeInstanceOf(model);
});

test('global company has a uid', () => {
    expect(company.uid).toBe('c1');
});

test('able to retrieve global company', () => {
    var companyRetrieve = CompanyService.retrieve('c1');
    expect(companyRetrieve).toBeInstanceOf(model);
});

test('company has a uid that can be retrieved after several companies made', () => {
    let data = { guid: 'guid', 
    company_name: 'FunFun', first_name: 'Ted', 
    last_name: 'GeoCity', address: '123 Apple', 
    email: 'geo@geocity.com'
    };
    CompanyService.create(data);
    CompanyService.create(data);
    var companyRetrieve = CompanyService.retrieve('c3');
    expect(companyRetrieve).toBeInstanceOf(model);
});

test('company model can be updated', () => {
    let newData = { guid: 'guid', 
    company_name: 'MoreFunFun', first_name: 'Teddy', 
    last_name: 'GeoCity', address: '123 Apple', 
    email: 'geo@geocity.com'
    };
    var companyBefore = CompanyService.retrieve('c1');
    var uid = companyBefore.uid;
    var firstName = companyBefore.first_name;
    var companyName = companyBefore.company_name;
    var lastName = companyBefore.last_name;
    expect(uid).toBe('c1');
    expect(firstName).toBe('Ted');
    expect(companyName).toBe('FunFun');
    expect(lastName).toBe('GeoCity');
    CompanyService.update('c1', newData);
    var companyAfter = CompanyService.retrieve('c1');
    var uidAfter = companyAfter.uid;
    var firstNameAfter = companyAfter.first_name;
    var companyNameAfter = companyAfter.company_name;
    var lastNameAfter = companyAfter.last_name;
    expect(uidAfter).toBe('c1');
    expect(firstNameAfter).toBe('Teddy');
    expect(companyNameAfter).toBe('MoreFunFun');
    expect(lastName).toBe('GeoCity');
    
    expect(() => { CompanyService.retrieve('c1'); }).not.toThrow();
});

test('company model can be removed', () => {
    var companyHere= CompanyService.retrieve('c2');
    CompanyService.delete('c2');
    expect(companyHere).toBeInstanceOf(model);
    expect(() => { CompanyService.retrieve('c2'); }).toThrow();
});
