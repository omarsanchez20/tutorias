const express = require('express');
const router = express.Router();
const interviewn3controller = require('../contollers/interview-n3-controller');

router.get('/', interviewn3controller.getAllInterviewn3);
router.post('/',interviewn3controller.createInterviewn3 );
router.put('/',interviewn3controller.updateInterviewn3 );

module.exports = router;