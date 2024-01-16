const DB = require("../config/DB");
const Joi = require("joi");

class Forms {
 
   async validArticle(response) {
         const ArtSchema = Joi.object({
            title: Joi.string().required().min(2),
            art_value: Joi.string().required().min(20),
            date: Joi.string().required().min(2),
         }); 
        return await ArtSchema.validateAsync(response);
   }

   async SaveArticle(data) {
      const sql = `INSERT INTO articels SET ?`;
      try {
         const result = await DB.query(sql, [data]);
         return result;
      } catch (error) {
         console.error(error.stack);
         return error;
      }
   }
}

module.exports = new Forms();
