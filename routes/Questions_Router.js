const express = require('express');
const router = express.Router();
const Controll = require('../controllers/QuestionsController');

router.post ('/sendQuestion' , Controll.sendQuestion)
router.get ('/GetQuestions' , Controll.GetQuestions)




module.exports = router;