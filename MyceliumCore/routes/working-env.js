const express = require('express');
const { createWorkingEnv, updateWorkingEnv, getWorkingEnv } = require("../controllers/working-env");

const router = express.Router();

router.route('/').post(createWorkingEnv);

router.route('/:id').put(updateWorkingEnv).get(getWorkingEnv);

module.exports = router;