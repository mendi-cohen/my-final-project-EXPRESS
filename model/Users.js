const DB = require("../config/DB");
const Joi = require("joi");

class users {
  async findAll() {
    let sql = `SELECT * FROM Users`;
    return await DB.execute(sql);
  }

  async findById(id) {
    const sql = `SELECT * FROM Users WHERE id = ?`;
    return await DB.execute(sql, [id]);
  }

  async findAndDelete(id) {
    if (id === 0) {
      return "not found!";
    }
    const sqlDelete = `DELETE FROM Users WHERE id = ?`;
    await DB.execute(sqlDelete, [id]);

    return result;
  }
  async updateUsers(id, newUserName, newEmail) {
    const sql = `UPDATE users SET  userName = ?, email = ? WHERE id = ?`;
    return DB.query(sql, [newUserName, newEmail, id]);
  }

  /////////////////////

  async save(Data) {
    let sql = `INSERT INTO Users SET ?`;
    try {
      const result = await DB.query(sql, [Data]);
      return result[0];
    } catch (e) {
      console.error(e.stack);
      return 1;
    }
  }



  async findByEmail(email) {
    let sql = `SELECT * FROM Users WHERE email = ?`;
    const [result] = await DB.execute(sql, [email]);
    return result;
  }
  async validUser(response) {
    const userSchema = Joi.object({
      userName: Joi.string().required().min(2),
      email: Joi.string().required().email().min(2),
    });
    return userSchema.validate(response);
  }




  async enterToken(user_id, loginTime,loginDate, token) {
    try {
      const sql =
        "INSERT INTO Users_Log (user_id, connect_time , connect_date , token) VALUES (?, ?, ?, ?)";
      await DB.query(sql, [user_id, loginTime,loginDate, token]);
    } catch (error) {
      console.error("Error deleting token:", error);
    }
  }

  async deleteLog(connect_off, userEmail) {
    const sql = ` UPDATE Users_Log
    INNER JOIN Users ON Users_Log.user_id = Users.id
    SET Users_Log.token = 'NULL', Users_Log.connect_off = ?
    WHERE Users.email = ?;`;
    ;
    return DB.query(sql, [connect_off, userEmail ]);
  }
  
 



  // אם לא מפעילים את הקלאס
  //  צריך להפוך את הפונקציות לסטטיות
  // על מנת שיוכלו לעבוד במקומות אחרים
}
module.exports = new users();
