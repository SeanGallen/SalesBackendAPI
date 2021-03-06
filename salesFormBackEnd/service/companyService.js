const CompanyModel = require('../model/CompanyModel');
let Validator =require('fastest-validator');

let companies = {};
let count = 0;

let companyValidator = new Validator();

let namePattern = /([A-Za-z\-\’])*/;

const companySchemaValidator = {
    guid: {type: 'string', min: 3},
    company_name: { type: 'string', min:1, max: 50, pattern: namePattern},
    first_name: { type: 'string', min:1, max: 50, pattern: namePattern},
    last_name: { type: 'string', min:1, max: 50, pattern: namePattern},
    address: { type: 'string', min:1, max: 50},
    email: { type: "email", max: 75 },
};

class CompanyService
{
    static create(data)
    {
		
        var validResponse = companyValidator.validate(data, companySchemaValidator);
        if(!validResponse === true)
        {
            let error = {}, item;
            for(const index in validResponse)
            {
                item = validResponse[index];
                errors[item.field] = item.message;
            }
            throw {
                name: "ValidationError",
			    message: errors
            };

        } 

		let company = new CompanyModel(data.company_name, data.first_name, data.last_name, data.address, data.email);
		company.uid = 'c' + count++;
		
		companies[company.uid] = company;

		return company;
    }

    static retrieve(uid)
	{
		if(companies[uid] != null)
		{
			return companies[uid];
		}
		else
		{
			throw new Error('Unable to retrieve a company by (uid:'+ uid +')');
		}
    }
    
    static update(uid, data)
	{
		if(companies[uid] != null)
		{
			const company = companies[uid];
			
			Object.assign(company, data);
		}
		else
		{
			throw new Error('Unable to retrieve a company by (uid:'+ cuid +')');
		}
    }
    
    static delete(uid)
	{
		if(companies[uid] != null)
		{
			delete companies[uid];
		}
		else
		{
			throw new Error('Unable to retrieve a company by (uid:'+ cuid +')');
		}
	}

}

module.exports = CompanyService;