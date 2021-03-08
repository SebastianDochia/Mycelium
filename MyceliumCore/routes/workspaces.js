const express = require('express');
const { getWorkspace, createWorkspace, updateWorkspace, deleteWorkspace } = require("../controllers/workspaces");

const router = express.Router();

router.route('/').post(createWorkspace);

router.route('/:id').get(getWorkspace).put(createWorkspace).delete(deleteWorkspace);

module.exports = router;