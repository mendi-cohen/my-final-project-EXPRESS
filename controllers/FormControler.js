const Form = require('../model/Forms');

class FormControl {

    async sendArticle(req, res) {
        try {
            // Validation
            const validateDB = await Form.validArticle(req.body);
            if (validateDB.error) {
                const errorMessage = validateDB.error.details[0].message;
                return res.status(400).json({ error: errorMessage });
            }
            // Save the Article
            await Form.SaveArticle(req.body);
            res.status(201).json({ message: "Article added successfully" });
        
        } catch (error) {
            console.error('Error saving article:', error);
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new FormControl();
