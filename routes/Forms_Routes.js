const express = require('express');
const router = express.Router();
const Controll = require('../controllers/FormControler');

router.post ('/articles' , Controll.sendArticle)


module.exports = router;
