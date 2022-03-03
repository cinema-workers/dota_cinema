const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Film = sequelize.define('film', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ageRestriction: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  posterUrl: {
    type: Sequelize.TEXT
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Film;
