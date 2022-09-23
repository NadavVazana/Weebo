const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy ={}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const criteria = {}

        const collection = await dbService.getCollection('wap')
        var waps = await collection.find(criteria).toArray()

        return waps
    } catch (err) {
        logger.error('cannot find waps', err)
        throw err
    }
}

async function getById(wapId) {
    try {
        const collection = await dbService.getCollection('wap')
        const wap = collection.findOne({ _id: (wapId) })
        return wap
    } catch (err) {
        logger.error(`while finding wap ${wapId}`, err)
        throw err
    }
}





module.exports = {
    query,
    getById,
  
}