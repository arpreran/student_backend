const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Quiz = sequelize.define('Quiz', {
  QuizID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Date: {
  type: DataTypes.DATE,
  allowNull: true
},
  CourseID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Courses',
      key: 'CourseID'
    },
    onDelete: 'CASCADE'
  },
  Title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  TotalQuestions: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'Quizzes'
});

module.exports = Quiz;
