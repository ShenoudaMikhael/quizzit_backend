var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/status', homeController.status);
router.get('/version', homeController.version);
router.get('/quiz', homeController.quiz);


module.exports = router