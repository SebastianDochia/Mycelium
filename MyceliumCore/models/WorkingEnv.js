const mongoose = require('mongoose');

const EorkingEnvSchema = new mongoose.Schema({
    linkedWorkspace: {
        type: String,
        required: true
    },
    code: String,
    output: String,
});

module.exports = mongoose.model('WorkingEnv', EorkingEnvSchema);