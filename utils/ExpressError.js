class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        console.log("ExpressError constructed:", statusCode, message);
    }
}

module.exports = ExpressError;