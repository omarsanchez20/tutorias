const express = require('express');
const router = express.Router();
const interviewTeachersController = require('../contollers/interview-teachers-controller'); // Corrige el nombre de la carpeta a 'controllers'

router.post('/', interviewTeachersController.createInterviewTeacher);
router.get('/', interviewTeachersController.getAllInterviewTeachers);
router.put('/', interviewTeachersController.updateInterviewTeacher);
router.delete('/', interviewTeachersController.deleteInterviewTeacher);

module.exports = router;
