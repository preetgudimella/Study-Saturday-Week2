'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   is: /[\w]+/,
    // },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   is: /[\w]+/,
    // },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

Student.beforeCreate(student => {
  const nameFirst = student.firstName;
  const nameLast = student.lastName;

  student.firstName = nameFirst[0].toUpperCase() + nameFirst.slice(1);
  student.lastName = nameLast[0].toUpperCase() + nameLast.slice(1);
});

module.exports = Student;












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

module.exports = Student;                           // Exporting
