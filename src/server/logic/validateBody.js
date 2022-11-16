/**
 *
 * @param {{validate: (x: any) => boolean}} schema
 * @returns
 */
export default function validateBody(validator) {
    /**
     * Check if token is valid
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {} next
     */
    return (req, res, next) => {
        if (validator.validate(req.body)) {
            next();
        } else {
            res.status(401).send({
                ok: false,
                msg: "Invalid data structure",
            });
        }
    };
}
