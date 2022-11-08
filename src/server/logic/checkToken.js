import {tokenVerify} from "../database.js";

/**
 * Check if token is valid
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
export default async function checkToken(req, res, next) {
    if (await tokenVerify(req.headers.authorization)) {
        next();
    } else {
        res.status(401).send({
            ok: false,
            msg: "Invalid token",
        });
    }
}
