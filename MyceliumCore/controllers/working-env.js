const WorkingEnv = require('../models/WorkingEnv');
const Compiler = require('../Compilation/Compiler');

// @desc    Get workingEnv by id
// @route   GET /api/v1/workingEnv
// @access  Private
exports.getWorkingEnvById = async (req, res, next) => {
    try {
        const workingEnv = await WorkingEnv.find({linkedWorkspace : req.params.id});

        res.status(200).json({ success: true, data: workingEnv });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: error });
    }
}

// @desc    Create new workingEnv
// @route   POST /api/v1/working-env
// @access  Private
exports.createWorkingEnv = async (req, res, next) => {
    try {
        const workingEnv = await WorkingEnv.create(req.body);

        res.status(201).json({
            success: true,
            data: workingEnv
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
}

// @desc    Update workingEnv
// @route   PUT /api/v1/working-env/:id
// @access  Private
exports.updateWorkingEnv = async (req, res, next) => {
    try {
        const workingEnv = await WorkingEnv.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        
        let compiler = new Compiler();
        const compilationResult = compiler.compileAndRun(req.body.code);
    
        if(!workingEnv) {
            return res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: workingEnv});
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
}