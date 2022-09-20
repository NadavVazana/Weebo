const wapService = require('./wap.service.js');
const logger = require('../../services/logger.service')

// GET LIST
async function getWaps(req, res) {
  try {
    var queryParams = req.query
    const waps = await wapService.query(queryParams)
    res.json(waps)
  } catch (err) {
    logger.error('Failed to get waps', err)
    res.status(500).send({ err: 'Failed to get waps' })
  }
}

// GET BY ID 
async function getWapById(req, res) {
  try {
    const wapId = req.params.id
    const wap = await wapService.getById(wapId)
    res.json(wap)
  } catch (err) {
    logger.error('Failed to get wap', err)
    res.status(500).send({ err: 'Failed to get wap' })
  }
}



module.exports = {
  getWaps,
  getWapById,
}
