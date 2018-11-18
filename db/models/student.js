'use strict';

const Sequelize = require('sequelize');
const db = require('../db');                            // ??? Requiring the entire database



const Student = db.define('student', {             // Creating the models (models are tables represented as objects)
  
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
    // validate: {
    //   is: /[\w]+/,
    // },
  },
  
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
    // validate: {
    //   is: /[\w]+/,
    // },
  },
  
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});



// http://docs.sequelizejs.com/manual/tutorial/hooks.html#declaring-hooks
// ??? how can you know which hook to choose based on spec?
Student.beforeCreate(student => {                          // Options isn't needed in: Student.beforeCreate((user, options) => {
  const firstName = student.firstName;
  const lastName = student.lastName;
  student.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  student.lastName = lastName[0].toUpperCase() + lastName.slice(1);
})

module.exports = Student;                           // Exporting













