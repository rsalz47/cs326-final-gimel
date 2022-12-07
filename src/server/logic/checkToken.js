/**
 * Check if token is valid
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
export default async function checkToken(req, res, next) {
    // Already handled by passport.js
    // We only reuse the object
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send({
            msg: "Invalid token",
        });
    }
}
