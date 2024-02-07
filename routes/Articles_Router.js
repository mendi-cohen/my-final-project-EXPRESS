const express = require('express');
const router = express.Router();
const Controll = require('../controllers/ArticlesControler');

router.post ('/sendArticle' , Controll.sendArticle)
router.get ('/getArticle' , Controll.GetArticel)
router.get ('/getOneType/:title' , Controll.GetOneType)


module.exports = router;
