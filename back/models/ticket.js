const { STRING } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Ticket = sequelize.define("ticket", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalPrice: {
    type: Number,
    allowNull: false,
  },
  seat: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Price;
