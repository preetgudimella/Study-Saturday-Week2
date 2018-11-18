const router = require('express').Router();
const Student = require('../db/models/student');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);
    if (student) {
      res.send(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    let updatedStudentInfo = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.send(updatedStudentInfo[1]);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;













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
