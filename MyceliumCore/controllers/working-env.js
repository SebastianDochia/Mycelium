const ErrorResponse = require('../utils/errorResponse');
const Compiler = require('../Compilation/Compiler');
const asyncHandler = require('../middleware/async');
const WorkingEnv = require('../models/WorkingEnv');


// @desc    Get workingEnv by id
// @route   GET /api/v1/workingEnv
// @access  Private
exports.getWorkingEnv = asyncHandler(async (req, res, next) => {
    const workingEnv = await WorkingEnv.find({ linkedWorkspace: req.params.id });

    if (!workingEnv) {
        return next(new ErrorResponse(`Working Environment not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: workingEnv });
});

// @desc    Create new workingEnv
// @route   POST /api/v1/working-env
// @access  Private
exports.createWorkingEnv = asyncHandler(async (req, res, next) => {
    const workingEnv = await WorkingEnv.create(req.body);

    res.status(201).json({
        success: true,
        data: workingEnv
    });
});

// @desc    Update workingEnv
// @route   PUT /api/v1/working-env/:id
// @access  Private
exports.updateWorkingEnv = asyncHandler(async (req, res, next) => {
    const workingEnv = await WorkingEnv.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    //  Compile and run code
    const compilationResult = await new Compiler().compileAndRun(Buffer.from(req.body.code, 'base64').toString());
    console.log(compilationResult);

    if (!workingEnv) {
        return next(new ErrorResponse(`Working Environment not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: compilationResult });
});