// const DB = require("../config/DB");
// const Joi = require("joi");

// class Articels {
 
//    async validArticle(response) {
//          const ArtSchema = Joi.object({
//             title: Joi.string().required().min(2),
//             second_title: Joi.string().required().min(5),
//             art_value: Joi.string().required().min(20),
//             date: Joi.string().required().min(2),
//             time: Joi.string().required(),
//          }); 
//         return await ArtSchema.validateAsync(response);
//    }

//    async SaveArticle(data) {
//       const sql = `INSERT INTO articels SET ?`;
//       try {
//          const result = await DB.query(sql, [data]);
//          return result;
//       } catch (error) {
//          console.error(error.stack);
//          return error;
//       }
//    }

//    async GetArticel(){
//    const sql = `SELECT * FROM articels ORDER BY time DESC`;
//    const result = await DB.query(sql);
//    return result;
// }

// async GetOneType(title){
//    const sql = `SELECT * FROM articels WHERE title = ?`;
//    const result = await DB.query(sql , [title]);
//    return result;
// }

// }

// module.exports = new Articels();
