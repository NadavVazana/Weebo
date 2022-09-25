const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports={
    add,
    getById,
    remove,
    update,
    query
}


async function query(filterBy){
    
    const collection = await dbService.getCollection('site')
    if(filterBy.owner){
    const sites =  await collection.find({owner: filterBy.owner}).toArray()
    return sites}
    filterBy.siteId = ObjectId(filterBy.siteId)
    const site =  await collection.find({_id: filterBy.siteId}).toArray()
    return site
    
     
}


async function add(site){
    try{
       delete site._id
    const collection = await dbService.getCollection('site')
    collection.insertOne(site)
    return site


    }

    catch(err){
        console.log(err);

    }
    
}

async function remove(siteId) {
    try {
        const collection = await dbService.getCollection('site')
        await collection.deleteOne({ "_id": ObjectId(siteId) })
    } catch (err) {
        // logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function getById(siteId){
    const collection = await dbService.getCollection('site')
    const site = await collection.findOne({ '_id': ObjectId(siteId) })
    return site
}

async function update(site){
    try{    site._id = ObjectId(site._id)
        const collection = await dbService.getCollection('site')
      const newSite =   await collection.updateOne({ '_id': ObjectId(site._id) }, { $set: site })
      console.log(newSite);
    }
    catch(err){

    }
}