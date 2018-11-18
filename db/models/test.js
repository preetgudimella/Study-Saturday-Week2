'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('test', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   id: /[\w]+/,
    // },
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // validate: {
    //   isNumeric: true,
    // },
  },
});

Test.belongsTo(Student, { as: 'student' });

module.exports = Test;









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
