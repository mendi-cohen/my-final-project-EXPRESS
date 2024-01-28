const DB = require("../config/DB");
const Joi = require("joi");

class Questions {
 
   async validQuestion(response) {
         const ArtSchema = Joi.object({
            title: Joi.string().required().min(2),
            chekbox: Joi.required(),
            Question_value: Joi.string().required().min(20),
            date: Joi.string().required().min(2),
            time: Joi.string().required(),
         }); 
        return await ArtSchema.validateAsync(response);
   }

   async SaveQuestion(data) {
      const sql = `INSERT INTO questions SET ?`;
      try {
         const result = await DB.query(sql, [data]);
         return result;
      } catch (error) {
         console.error(error.stack);
         return error;
      }
   }

   async GetQuestions(){
   const sql = `SELECT * FROM questions ORDER BY time DESC`;
   const result = await DB.query(sql);
   return result;
}

async GetOneType(title){
   const sql = `SELECT * FROM questions WHERE title = ?`;
   const result = await DB.query(sql , [title]);
   return result;
}



}

module.exports = new Questions();
