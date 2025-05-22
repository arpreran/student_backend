const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Parent = sequelize.define('Parent', {
  ParentID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Contact: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  StudentID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Students',
      key: 'StudentID'
    },
    onDelete: 'CASCADE'
  }
}, {
  timestamps: false,
  tableName: 'Parents'
});

module.exports = Parent;