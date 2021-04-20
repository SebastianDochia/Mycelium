const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    //Log for dev
    console.log(err.stack.red);

    // Mongoose bad ObjectId
    if(err.name === 'CastError') {
        const message = `Resource not found with id ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    console.log(err.name);

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || "Server Error"
    });
}

module.exports = errorHandler;