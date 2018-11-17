
// This is where the routers are written - process client HTTP requests

const router = require('express').Router();
const Student = require('../db/models/student')                 // Importing the Student model from the student.js file in the Models directory

router.get('/students', async (req, res, next) => {
  try {

  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
