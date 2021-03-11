const express = require('express');

const MeetUpController = require('../controllers/MeetUpController');

const router = express.Router();
const { check } = require('express-validator');

router.post('/create', [], MeetUpController.create());


module.exports = router;