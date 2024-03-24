const express = require('express')
const router = express.Router()
const apiControls = require('../controller/apiController')

router.get('/control', apiControls.get)
router.post('/control', apiControls.add)

module.exports = router