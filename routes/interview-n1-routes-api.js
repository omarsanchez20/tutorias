const express = require('express');
const router = express.Router();
const interviewn1controller = require('../contollers/interview-n1-controller');

router.get('/', interviewn1controller.getAllInterviewn1);
router.get('/interview1/:matricula', interviewn1controller.getInterviewsByMatricula);
router.get('/filterinterview', interviewn1controller.filterInterview);
router.post('/',interviewn1controller.createInterviewn1 );
router.put('/',interviewn1controller.updateInterviewn1 );
router.delete('/remover',interviewn1controller.delete );

module.exports = router;