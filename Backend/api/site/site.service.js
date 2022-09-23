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
    const site =  await collection.find({_id: filterBy.siteId}).toArray()
    return site
    
     
}


async function add(site){
    try{
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
        await collection.deleteOne({ "_id": siteId })
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
    try{    
        const collection = await dbService.getCollection('site')
      return  await collection.updateOne({ '_id': site._id }, { $set: site })
    }
    catch(err){

    }
}