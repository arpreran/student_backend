const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Course = sequelize.define('Course', {
  CourseID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT
  },
  Type: {
    type: DataTypes.ENUM('Online', 'Offline', 'Hybrid')
  },
  TeacherID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Teachers',
      key: 'TeacherID'
    },
    onDelete: 'SET NULL'
  }
}, {
  timestamps: false,
  tableName: 'Courses'
});

module.exports = Course;