const mongoose = require('mongoose');

const WorkspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxlenght: [30, 'Name cannot be more than 30 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlenght: [250, 'Description cannot be more than 250 characters']
    },
    owner: String,
    members: [String],
    isStarted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Workspace', WorkspaceSchema);