const express = require('express');
const router = express.Router();
const interviewn4controller = require('../contollers/interview-n4-controller');

router.get('/', interviewn4controller.getAllInterviewn4);
router.post('/',interviewn4controller.createInterviewn4 );
router.put('/',interviewn4controller.updateInterviewn4);

module.exports = router;