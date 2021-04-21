const express = require('express');
const { createWorkingEnv, updateWorkingEnv, getWorkingEnv } = require("../controllers/working-env");

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.route('/').post(protect, authorize('professor', 'admin'), createWorkingEnv);

router.route('/:id').put(protect, updateWorkingEnv).get(protect, getWorkingEnv);

module.exports = router;