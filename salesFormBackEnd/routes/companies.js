var express = require('express');
var router = express.Router();
var CompanyService = require('../service/companyService');

router.get('/', async (req, res, next) => {
  res.json({error: "Invalid Company UID."});
});

router.post('/', async (req, res, next) => 
{
  const body = req.body;
  try
	{
		const company = await CompanyService.create(body);
    if(body.guid !== null)
    {
      company.guid = body.guid;
    }
    res.cookie('guid', body.guid, { maxAge: 900000, httpOnly: true });
    return res.status(201).json({ company: company});
  }
  catch(err)
  {
    if(err.name === "ValidationError")
    {
      return res.status(400).json({ error: err.message });
		}

		return next(err);
  
  }
});

router.get('/:id', async (req, res, next) => 
{
  try
  {
    const company = await CompanyService.retrieve(req.params.id);
    return res.json({ company: company});
  }
  catch(err)
  {
    return next(err);
  }
});

router.put('/:id', async (req, res, next) => 
{
  try
  {
    const company = await CompanyService.update(req.params.id, req.body);
    return res.json({ company: company});
  }
  catch(err)
  {
    return next(err);
  }
});

router.delete('/:id',  async (req, res, next) => 
{
  try
  {
    const company = await CompanyService.delete(req.params.id);
    return res.json({ success: true});
  }
  catch(err)
  {
    return next(err);
  }
});

module.exports = router;