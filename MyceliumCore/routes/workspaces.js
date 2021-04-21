const express = require('express');
const { getWorkspaces, getWorkspace, createWorkspace, updateWorkspace, deleteWorkspace } = require("../controllers/workspaces");

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/').post(protect, createWorkspace).get(protect, getWorkspaces);

router.route('/:id').get(protect, getWorkspace).put(protect, updateWorkspace).delete(protect, deleteWorkspace);

module.exports = router;