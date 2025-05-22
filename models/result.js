const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Result = sequelize.define('Result', {
  ResultID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  StudentID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Students',
      key: 'StudentID'
    },
    onDelete: 'CASCADE'
  },
  QuizID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Quizzes',
      key: 'QuizID'
    },
    onDelete: 'CASCADE'
  },
  Score: {
    type: DataTypes.INTEGER
  },
  TakenOn: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false,
  tableName: 'Results'
});

module.exports = Result;