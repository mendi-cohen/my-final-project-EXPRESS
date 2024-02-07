const express = require('express');
const router = express.Router();
const Controll = require('../controllers/EnswerController');

router.post ('/sendEnswer' , Controll.sendQuestionAndEnswer)
router.get ('/GetEnswers' , Controll.GetQuestionsAndEnswer)




module.exports = router;