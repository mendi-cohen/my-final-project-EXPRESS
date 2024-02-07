const Enswer = require('../model/Enswers');

class EnswersController {

    async sendQuestionAndEnswer(req, res) {
        try {
            await Enswer.SaveEnswer(req.body);
            res.status(201).json({ message: "enswer added successfully" });
        
        } catch (error) {
            console.error('Error saving enswer:', error);
            res.status(400).json({ error: error.message });
        }
        
    }
    async GetQuestionsAndEnswer(req, res) {
   try {
    const [getTheEnswers,_] = await Enswer.GetEnswers();
    res.json ({getTheEnswers});


  } catch (error) {
    console.log(error);
  }


    }







    }


module.exports = new EnswersController();
