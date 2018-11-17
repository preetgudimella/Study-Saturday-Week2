'use strict';

const Sequelize = require('sequelize');
const db = require('../db');                        // ???

const Student = db.define('student', {             // Creating the models (models are tables represented as objects)
  
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

// ??? how to know which hook to choose based on spec
// http://docs.sequelizejs.com/manual/tutorial/hooks.html#declaring-hooks
Student.beforeCreate(student => {                          // Options isn't needed in: Student.beforeCreate((user, options) => {
  const firstName = student.firstName;
  const lastName = student.lastName;
  student.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  student.lastName = lastName[0].toUpperCase() + lastName.slice(1);
})

// get ‘/’
// get ‘/:id’
// post ‘/’
// put ‘/:id’
// delete ‘/:id’

// get ‘/’
// get ‘/:id’
// post ‘/student/:studentId’
// delete ‘/:id’



module.exports = Student;                           // Exporting
