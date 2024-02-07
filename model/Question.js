const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB');
const Joi = require("joi");

/// הקמת הטבלאות במקרה של מחיקה 
sequelize.sync();

const Question = sequelize.define('Question', {
   title: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   chekbox: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   Question_value: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   date: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   time: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   additionalInfo: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 }, { 
   tableName: 'questions',
   timestamps: false, 
 });


class Questions {
  async validQuestion(response) {
    const ArtSchema = Joi.object({
      title: Joi.string().required().min(2),
      chekbox: Joi.required(),
      Question_value: Joi.string().required().min(10),
      additionalInfo: Joi.required(),
      date: Joi.date().required(), 
      time: Joi.string().required(),
    });

    return await ArtSchema.validateAsync(response);
  }

  async SaveQuestion(data) {
    try {
      const validation = await this.validQuestion(data);
      if (validation.error) {
        throw new Error(validation.error.details[0].message);
      }

      const result = await Question.create(data);
      return result;
    } catch (error) {
      console.error(error.stack);
      return error;
    }
  }

  async GetQuestions() {
    try {
      const result = await Question.findAll({ order: [['time', 'ASC']] });
      return [result];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}

module.exports = new Questions();
