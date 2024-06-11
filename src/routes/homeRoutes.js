var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/status', homeController.status);
router.get('/version', homeController.version);


module.exports = router