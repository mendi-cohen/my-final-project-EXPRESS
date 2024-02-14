const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB');


/// הקמת הטבלאות במקרה של מחיקה 


const Enswer = sequelize.define('Enswer', {
   Question_value: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   Enswer_value: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });


class Enswers {

  async SaveEnswer(data) {
    try {
      const result = await Enswer.create(data);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error.stack);
      return error;
    }
  }

  async GetEnswers() {
    try {
      const result = await Enswer.findAll({ order: [['time', 'ASC']] });
      return [result];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}

module.exports = new Enswers();
