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

Test.belongsTo(Student, { as: 'student' });     // renames the column for the foreign id from Student, which is on Test
// Student.hasMany(Test)                        // redundant

module.exports = Test;
