const DB = require('../config/DB');

class users {
    constructor(user_ID , userName, email){
        this.user_ID = user_ID;
        this.userName = userName;
        this.email = email;
    }


  async save(){
    let sql = `
        INSERT INTO Users (user_ID, userName, email) 
        VALUES (
            ${this.user_ID},
            '${this.userName}',
            '${this.email}'
        )
    `;
    const [result,_] = await DB.execute(sql);
    return result;
}

    static async findAll(){
        let sql = `SELECT * FROM Users`
        return await DB.execute(sql);
    }
}




module.exports = users