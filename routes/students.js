
const router = require('express').Router();
const Student = require('../db/models/student')


/*

get ‘/’
get ‘/:id’
post ‘/’
put ‘/:id’
delete ‘/:id’

get, delete, post, put
    - req.params.X
post, put
    - req.body

*/


// https://sequelizedocs.fullstackacademy.com/querying/
router.get('/', async (req, res, next) => {                   // ??? router.get since enabling routing via: const router = require('express').Router();
  try {
    const findAllStudents = await Student.findAll();          // Finds ALL the pugs
    res.status(200).json(findAllStudents);
  } catch (err) {
    console.log(err);
    next(err);
  }
})



// https://sequelizedocs.fullstackacademy.com/querying/
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const findOneStudent = await Student.findById(id);
    if (!findOneStudent) {
      res.status(404).json();                             // The status that the client gets
    } else {
      res.status(200).json(findOneStudent);               // The status that the client gets
    }
  } catch (err) {
    console.log(err);                                     // The status that the developer gets
    next(err)
  }
})



// https://sequelizedocs.fullstackacademy.com/inserting-updating-destroying/
router.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const createdStudent = await Student.create(body)
    res.status(201).json(createdStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
})



// https://sequelizedocs.fullstackacademy.com/querying/
// https://sequelizedocs.fullstackacademy.com/inserting-updating-destroying/
router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const findOneStudent = await Student.findById(id);
    const updatedStudent = await findOneStudent.update(body)
    res.status(200).json(updatedStudent);
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
    const findOneStudent = await Student.findById(id);
    const deletedStudent = await findOneStudent.destroy()
    res.status(204).json(deletedStudent);
  } catch (err) {
    console.log(err);
    next(err);
  }
})

module.exports = router;
