const DB = require('../config/DB');
const Joi = require('joi');

class users {




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




/////////////////////



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

// async enterToken(TOKEN,email ) {
//     const sql = 'UPDATE users SET TOKEN = ? WHERE email = ?';
//     return DB.query(sql, [TOKEN, email]);
//   }
  
async enterToken(TOKEN, email ) {
    try {
        const expirationTime = new Date();
    
        const sql = 'UPDATE users SET TOKEN = ?, TOKEN_TIME = ? WHERE email = ?';
        await DB.query(sql, [TOKEN, expirationTime, email]);
    
        // setTimeout(async () => {
        //   try {
        //     const deleteSql = 'UPDATE users SET TOKEN = NULL, TOKEN_TIME = NULL WHERE email = ?';
        //     await DB.query(deleteSql, [email]);
        //     console.log('Token deleted successfully after 10 seconds');
        //   } catch (error) {
        //     console.error('Error deleting token:', error);
        //   }
        // }, 10000); 
        // return { success: true, message: 'Token updated successfully' };


      } catch (error) {
        console.error('Error updating token:', error);
        return { success: false, message: 'Error updating token' };
      }
    }
  

      
} 
     

    


// אם לא מפעילים את הקלאס
//  צריך להפוך את הפונקציות לסטטיות 
// על מנת שיוכלו לעבוד במקומות אחרים

 

module.exports = new users