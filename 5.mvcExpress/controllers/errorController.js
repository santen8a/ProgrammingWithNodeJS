exports.logErrors = (error,req,res,next) =>{
    console.log("Printing error stack");
    console.error(error.stack);
    next(error);
}