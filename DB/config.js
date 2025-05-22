const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('HootAndHowlLearning', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
