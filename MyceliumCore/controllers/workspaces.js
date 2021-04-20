const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Workspace = require('../models/Workspace');

// @desc    Get all workspaces
// @route   GET /api/v1/workspaces
// @access  Private
exports.getWorkspaces = asyncHandler(async (req, res, next) => {
    const workspaces = await Workspace.find(req.params.id);

    res.status(200).json({ success: true, data: workspaces });
});

// @desc    Get single workspace
// @route   GET /api/v1/workspaces/:id
// @access  Private
exports.getWorkspace = asyncHandler(async (req, res, next) => {
    const workspace = await Workspace.findById(req.params.id);

    if (!workspace) {
        return next(new ErrorResponse(`Workspace not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: workspace });
});

// @desc    Create new workspace
// @route   POST /api/v1/workspaces
// @access  Private
exports.createWorkspace = asyncHandler(async (req, res, next) => {
    const workspace = await Workspace.create(req.body);

    res.status(201).json({
        success: true,
        data: workspace
    });
});

// @desc    Update workspace
// @route   PUT /api/v1/workspaces/:id
// @access  Private
exports.updateWorkspace = asyncHandler(async (req, res, next) => {
    const workspace = await Workspace.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    if (!workspace) {
        return next(new ErrorResponse(`Workspace not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: workspace });
});

// @desc    Delete workspace
// @route   DELETE /api/v1/workspaces/:id
// @access  Private
exports.deleteWorkspace = asyncHandler(async (req, res, next) => {
    const workspace = await Workspace.findByIdAndDelete(req.params.id);

    if (!workspace) {
        return next(new ErrorResponse(`Workspace not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: {} });
});