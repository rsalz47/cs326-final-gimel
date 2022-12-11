import passport from "passport";
import LocalStrategy from "passport-local";
import {userGetById, userVerify} from "../database.js";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const check = await userVerify(username, {password});
            done(null, check === null ? false : {id: check});
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    done(null, await userGetById(id));
});

export default [
    passport.authenticate("local", {
        failWithError: true,
    }),
    function authSuccess(_req, _res, next) {
        next();
    },
    function authFailure(err, _req, res, _next) {
        console.error(err.stack);
        res.status(401).send({
            msg: "Invalid credential",
        });
    },
];
