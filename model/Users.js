const DB = require('../config/DB');

class users {
    // constructor(user_ID , userName, email){
    //     this.user_ID = user_ID;
    //     this.userName = userName;
    //     this.email = email;
    // }


   async save(Data){
    let sql = `INSERT INTO Users SET ?`;
    const [result,_] = await DB.query(sql , [Data]);
    return result;
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
   async updateUsers(id, newUser_ID, newUserName, newEmail) {
    const sql = `UPDATE users SET user_ID = ?, userName = ?, email = ? WHERE id = ?`;
    return DB.query(sql, [newUser_ID, newUserName, newEmail, id]);
}

      
} 
     

    


// אם לא מפעילים את הקלאס
//  צריך להפוך את הפונקציות לסטטיות 
// על מנת שיוכלו לעבוד במקומות אחרים

 

module.exports = new users