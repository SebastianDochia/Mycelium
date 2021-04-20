const Workspace = require('../models/Workspace');

// @desc    Get all workspaces
// @route   GET /api/v1/workspaces
// @access  Private
exports.getWorkspaces = async (req, res, next) => {
    try {
        const workspaces = await Workspace.find(req.params.id);

        res.status(200).json({ success: true, data: workspaces });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Get single workspace
// @route   GET /api/v1/workspaces/:id
// @access  Private
exports.getWorkspace = async (req, res, next) => {
    try {
        const workspace = await Workspace.findById(req.params.id);

        if(!workspace) {
            return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: workspace });
    } catch (error) {
        //res.status(400).json({ success: false });
        next(error);
    }
}

// @desc    Create new workspace
// @route   POST /api/v1/workspaces
// @access  Private
exports.createWorkspace = async (req, res, next) => {
    try {
        const workspace = await Workspace.create(req.body);

        res.status(201).json({
            success: true,
            data: workspace
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Update workspace
// @route   PUT /api/v1/workspaces/:id
// @access  Private
exports.updateWorkspace = async (req, res, next) => {
    try {
        const workspace = await Workspace.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        if(!workspace) {
            return res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: workspace});
    } catch (error) {
        return res.status(400).json({ success: false });
    }
}

// @desc    Delete workspace
// @route   DELETE /api/v1/workspaces/:id
// @access  Private
exports.deleteWorkspace = async (req, res, next) => {
    try {
        const workspace = await Workspace.findByIdAndDelete(req.params.id);
    
        if(!workspace) {
            return res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        return res.status(400).json({ success: false });
    }
}