
const router = require('express').Router();
const Test = require('../db/models/test');
const Student = require('../db/models/student')



/*


get ‘/’
get ‘/:id’
post ‘/student/:studentId’
delete ‘/:id’

get, delete, post, put
    - req.params.X
post, put
    - req.body

*/



// https://sequelizedocs.fullstackacademy.com/querying/
router.get('/', async (req, res, next) => {
  try {
    const findAllTests = await Test.findAll();
    res.status(200).json(findAllTests);
  } catch (err) {
    console.log(err);
    next(err);
  }
})



// https://sequelizedocs.fullstackacademy.com/querying/
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const findOneTest = await Test.findById(id)
    res.status(200).json(findOneTest);
  } catch (err) {
    console.log(err);
    next(err);
  }
})



// https://sequelizedocs.fullstackacademy.com/querying/
// https://sequelizedocs.fullstackacademy.com/inserting-updating-destroying/
// 
router.post('/student/:studentId', async (req, res, next) => {
  const studentId = req.params.studentId;
  const body = req.body;
  try {
    const findOneStudent = await Student.findById(studentId);
    const createdTest = await Test.create(body)
    const addToStudent = await createdTest.setStudent(findOneStudent)
    res.status(201).json(addToStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
})



// https://sequelizedocs.fullstackacademy.com/querying/
// https://sequelizedocs.fullstackacademy.com/inserting-updating-destroying/
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const findOneTest = await Test.findById(id);               // findOneTest is an instance of test 
    const deleteTest = await findOneTest.destroy();
    res.status(204).json(deleteTest);
  } catch (err) {
    console.log(err);
    next(err);
  }
})

module.exports = router;
