'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('test', {             // Creating the models (models are tables represented as objects)
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  },
  grade: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

// const Test = db.define('test', {
//   subject: {
//     type: Sequelize.STRING,
//     allowNull; false
//   },
//   grade: {
//     type: Sequelize.FLOAT,
//     allowNull; false
//   }
// })

Test.belongsTo(Student)
Student.hasMany(Test);

module.exports = Test;
