const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./category');

const Transaction = sequelize.define('Transaction', {
  type: {
    type: DataTypes.ENUM('income', 'expense'),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Association with Category (if needed for advanced usage)
Transaction.belongsTo(Category, { foreignKey: 'category', targetKey: 'name' });

module.exports = Transaction;
