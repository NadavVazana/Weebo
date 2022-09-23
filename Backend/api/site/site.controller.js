const siteService = require('./site.service')


async function addSite(req,res){
    const site =await  siteService.add(req.body)
    res.send(site)

}

async function getSitesByUserId(req,res){
    const sites = await siteService.query(req.query)
    res.send(sites)
}

async function getById(req,res){
    const site = await siteService.getById(req.params.id)
    res.send(site)
}

async function deleteSite(req,res){
    await siteService.remove(req.params.id)
    res.send(Promise.resolve())
}

async function updateSite(req,res){
    const site = await siteService.update(req.body)
    console.log(site);
    res.send(site)
}

module.exports={
    addSite,
    getById,
    deleteSite,
    updateSite,
    getSitesByUserId
}