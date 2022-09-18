const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getWaps, getWapById } = require('./wap.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
// const { getToys, getToyById, addToy, updateToy, removeToy, addReview } = require('./toy.controller')
router.get('/:id', getWapById)
router.get('/', getWaps)

module.exports = router