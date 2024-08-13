const express = require('express');
const router = express.Router();
const interviewn2controller = require('../contollers/interview-n2-controller');

router.get('/', interviewn2controller.getAllInterviewn2);
router.post('/',interviewn2controller.createInterviewn2 );
router.put('/',interviewn2controller.updateInterviewn2 );

module.exports = router;