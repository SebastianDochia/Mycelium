const express = require('express');
const { updateDetails } = require('../controllers/user');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.put('/updatedetails', protect, updateDetails);

module.exports = router;