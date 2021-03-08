// @desc    Get single workspace
// @route   GET /api/v1/workspaces/:id
// @access  Private
exports.getWorkspace = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show workspace ${req.params.id}` });
}

// @desc    Create new workspace
// @route   POST /api/v1/workspaces
// @access  Private
exports.createWorkspace = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Create new workspace` });
}

// @desc    Update workspace
// @route   PUT /api/v1/workspaces/:id
// @access  Private
exports.updateWorkspace = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update workspace ${req.params.id}` });
}

// @desc    Delete workspace
// @route   DELETE /api/v1/workspaces/:id
// @access  Private
exports.deleteWorkspace = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete workspace ${req.params.id}`});
}