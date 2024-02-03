const { DataTypes } = require('sequelize');
const sequelize = require('../config/DB');
const Joi = require('joi');

const Article = sequelize.define('Articels', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  second_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  art_value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  tableName: 'articels',
  timestamps: false,
});

class Articles {
  async validArticle(response) {
    const ArtSchema = Joi.object({
      title: Joi.string().required().min(2),
      second_title: Joi.string().required().min(5),
      art_value: Joi.string().required().min(20),
      date: Joi.string().required().min(2),
      time: Joi.string().required(),
    });

    return await ArtSchema.validateAsync(response);
  }

  async SaveArticle(data) {
    try {
      const validation = await this.validArticle(data);
      if (validation.error) {
        throw new Error(validation.error.details[0].message);
      }

      const result = await Article.create(data, { raw: true });
      return result;
    } catch (error) {
      console.error(error.stack);
      return error;
    }
  }

  async GetArticel() {
    try {
      const result = await Article.findAll({ order: [['time', 'DESC']] });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

async GetOneTypee(title) {
    try {
        const result = await Article.findOne({ where: { title }, raw: true });
        return [result]; // החזרת תוצאה כמערך עם פריט אחד
    } catch (error) {
        console.error('Error getting article by title:', error);
        throw error;
    }
}

}

module.exports = new Articles();
