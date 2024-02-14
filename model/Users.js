const { DataTypes } = require('sequelize');
const sequelize = require("../config/DB");
const Joi = require("joi");

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});


class Users {
  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findAndDelete(id) {
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      return "not found!!";
    }

    await userToDelete.destroy();
    return "deleted successfully";
  }

  async updateUsers(id, newUserName, newEmail) {
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
      return "not found!!";
    }

    userToUpdate.userName = newUserName;
    userToUpdate.email = newEmail;
    await userToUpdate.save();
    return "updated successfully";
  }

  async save(data) {
    try {
      const validation = await this.validUser(data);
      if (validation.error) {
        throw new Error(validation.error.details[0].message);
      }

      const result = await User.create(data);
      return result;
    } catch (error) {
      console.error(error.stack);
      return error;
    }
  }

  async findByEmail(email) {
    return await User.findOne({
      where: {
        email: email
      }
    });
  }

  async validUser(response) {
    const userSchema = Joi.object({
      userName: Joi.string().required().min(2),
      email: Joi.string().required().email().min(2),
    });
    return userSchema.validate(response);
  }

  async enterToken(user_id, loginTime, loginDate, off, token) {
    try {
      const sql =
        "INSERT INTO Users_Log (user_id, connect_time , connect_date ,connect_off, token) VALUES (?, ?, ?, ? , ?)";
      await sequelize.query(sql, [user_id, loginTime, loginDate, off, token]);
    } catch (error) {
      console.error("Error entering token:", error);
    }
  }

  async deleteLog(connect_off, userEmail) {
    const sql = ` UPDATE Users_Log
    INNER JOIN Users ON Users_Log.user_id = Users.id
    SET Users_Log.token = 'NULL', Users_Log.connect_off = ?
    WHERE Users.email = ?;`;

    return sequelize.query(sql, [connect_off, userEmail]);
  }

  async showLog() {
    const sql = `SELECT Users.userName, Users_Log.*
    FROM Users_Log
    INNER JOIN Users ON Users.id = Users_Log.user_id;`;
    return await sequelize.query(sql);
  }
}

module.exports = new Users();
