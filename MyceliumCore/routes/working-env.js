const express = require('express');
const { createWorkingEnv, updateWorkingEnv, getWorkingEnvById } = require("../controllers/working-env");

const router = express.Router();

router.route('/').post(createWorkingEnv);

router.route('/:id').put(updateWorkingEnv).get(getWorkingEnvById);

module.exports = router;