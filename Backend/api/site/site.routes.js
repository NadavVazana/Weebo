const express = require('express')
const router = express.Router()
const {addSite, getById, deleteSite,updateSite,getSitesByUserId} =require('./site.controller') 

router.post('/',addSite)
// router.get('/:id',getById)
router.delete('/:id',deleteSite)
router.put('/',updateSite)
router.get('/',getSitesByUserId)







module.exports = router