const router = require('express').Router();
const Test = require('../db/models/test');
const Student = require('../db/models/student');

router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll();
    res.send(tests);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let test = await Test.findById(req.params.id);
    if (test) {
      res.send(test);
    } else {
      res.status(404).send('Test not found');
    }
  } catch (err) {
    next(err);
  }
});

router.post('/student/:studentId', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.studentId);
    let test = await Test.create(req.body);
    let studentTest = await test.setStudent(student);
    res.status(201).send(studentTest);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Test.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;













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
