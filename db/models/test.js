'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('test', {             // Creating the models (models are tables represented as objects)
  
  subject: {
    type: Sequelize.STRING,
    allowNull: false
    // validate: {
    //   id: /[\w]+/,
    // },
  },
  
  grade: {
    type: Sequelize.INTEGER,                  // ??? is this better -> type: Sequelize.FLOAT?
    allowNull: false
    // validate: {
    //   isNumeric: true,
    // },
  }
});

Test.belongsTo(Student, { as: 'student' });
Student.hasMany(Test);

module.exports = Test;
