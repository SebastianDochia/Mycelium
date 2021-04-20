const errorHandler = (err, req, res, next) => {
    //Log for dev
    console.log(err.stack.red);

    res.status(500).json({
        success: false,
        error: err.mesage
    });
}

module.exports = errorHandler;