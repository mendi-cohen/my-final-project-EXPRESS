const DB = require('../config/DB');
const Joi = require('joi');

class users {


   async save(Data){
    let sql = `INSERT INTO Users SET ?`;
    try {
        const result = await DB.query(sql , [Data]);
        return result[0];

    } catch (e) {
        console.error(e.stack);
        return (1)
    }
  
}

     async findAll(){
        let sql = `SELECT * FROM Users`
        return await DB.execute(sql);
    }

     async findById(id){
        const sql = `SELECT * FROM Users WHERE id = ?`;
        return await DB.execute(sql , [id]);
    }

     async findAndDelete(id) {
        if (id === 0) {
           return "not found!"
        }
        const sqlDelete = `DELETE FROM Users WHERE id = ?`;
        await DB.execute(sqlDelete, [id]);
    
        return result;
    }
   async updateUsers(id, newUserName, newEmail) {
    const sql = `UPDATE users SET  userName = ?, email = ? WHERE id = ?`;
    return DB.query(sql, [ newUserName, newEmail, id]);
}

async findByEmail(email){
    let sql = `SELECT email FROM Users WHERE email = ?`;
 const [result] = await DB.execute(sql , [email]);
 return result;
}
 async validUser(response){
const userSchema = Joi.object({
  userName: Joi.string().required().min(2), 
  email: Joi.string().required().email().min(2),  
})
return userSchema.validate(response);
}

      
} 
     

    


// אם לא מפעילים את הקלאס
//  צריך להפוך את הפונקציות לסטטיות 
// על מנת שיוכלו לעבוד במקומות אחרים

 

module.exports = new users