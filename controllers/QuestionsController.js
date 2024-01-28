const Quest = require('../model/Question');

class QuestionsController {

    async sendQuestion(req, res) {
        try {
            // Validation
            const validateDB = await Quest.validQuestion(req.body);
            if (validateDB.error) {
                const errorMessage = validateDB.error.details[0].message;
                return res.status(400).json({ error: errorMessage });
            }
            // Save the Article
            await Quest.SaveQuestion(req.body);
            res.status(201).json({ message: "Question added successfully" });
        
        } catch (error) {
            console.error('Error saving article:', error);
            res.status(400).json({ error: error.message });
        }
        
    }



    async GetQuestions(req, res) {
   try {
    const [getTheQuestion,_] = await Quest.GetQuestions();
    console.log(getTheQuestion);
    res.json ({getTheQuestion});


  } catch (error) {
    console.log(error);
  }


    }







    }


module.exports = new QuestionsController();
