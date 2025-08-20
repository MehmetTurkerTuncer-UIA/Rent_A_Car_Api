class CustomError extends Error {

    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500; // Default to 500 if no status code is provided
        


}
}
module.exports = CustomError;
