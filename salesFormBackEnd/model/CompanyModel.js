class CompanyModel
{
    constructor(company_name, first_name, last_name, address, email)
    {
        this.company_name = company_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.email = email;
        this.uid = null;
    }
    
}
module.exports = CompanyModel;