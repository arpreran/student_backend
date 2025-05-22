const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Student = sequelize.define('Student', {
  StudentID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Grade: {
    type: DataTypes.STRING(10),
  },
  Progress: {
    type: DataTypes.TEXT,
  }
}, {
  timestamps: false,
  tableName: 'Students'
});