const Art = require('../model/Articels');

class ArticelsControl {

    async sendArticle(req, res) {
        try {
            // Validation
            const validateDB = await Art.validArticle(req.body);
            if (validateDB.error) {
                const errorMessage = validateDB.error.details[0].message;
                return res.status(400).json({ error: errorMessage });
            }
            // Save the Article
            await Art.SaveArticle(req.body);
            res.status(201).json({ message: "Article added successfully" });
        
        } catch (error) {
            console.error('Error saving article:', error);
            res.status(400).json({ error: error.message });
        }


        
    }
    async GetArticel(req, res) {
        try {
            const [ArtFdb ,_] = await Art.GetArticel() 
            res.json({ArtFdb})
            
    
          } catch (error) {
            console.log(error.message);
          }
        }

        async GetOneType(req, res) {
            try {
                const title = req.params.title
                const [oneType , _] = await Art.GetOneType(title);
                res.json({oneType})
                console.log(oneType);
                
            } catch (error) {
            console.log(error.message);
                
            }
        }
    }


module.exports = new ArticelsControl();
