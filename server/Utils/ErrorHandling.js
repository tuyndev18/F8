export function ErrorHandling (err, req, res, next) {
    const statusCode = err.status || 500;
	res.status(statusCode).json({mess: err.message})
}