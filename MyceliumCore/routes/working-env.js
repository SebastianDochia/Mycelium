const express = require('express');
const { createWorkingEnv, updateWorkingEnv, getWorkingEnv } = require("../controllers/working-env");

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/').post(protect, createWorkingEnv);

router.route('/:id').put(protect, updateWorkingEnv).get(protect, getWorkingEnv);

module.exports = router;