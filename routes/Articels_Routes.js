const express = require('express');
const router = express.Router();
const Controll = require('../controllers/ArticelsControler');

router.post ('/sendArticel' , Controll.sendArticle)
router.get ('/getArticel' , Controll.GetArticel)


module.exports = router;
