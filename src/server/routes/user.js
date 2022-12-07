import {Router} from "express";
import {userAdd, userGetById, userGetAll} from "../database.js";
import auth from "../logic/auth.js";
import checkToken from "../logic/checkToken.js";

const router = Router();

router.post("/register", async (req, res) => {
    const {username, password, name} = req.body;
    const validate = Boolean(username) && Boolean(password) && Boolean(name);
    if (validate && await userAdd(username, {password, role: "U", name})) {
        res.send({
            msg: "New user registered",
        });
    } else {
        res.status(400).send({
            msg: "Failed to register",
        });
    }
});

router.post("/verify", auth, (req, res) => {
    return res.send({
        msg: "Valid credential",
        data: req.body.username,
    });
});

router.use(checkToken);

router.get("/", async (req, res) => {
    const data = await userGetAll();
    res.send({
        msg: "Success",
        data,
    });
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    if (!id) {
        res.status(400).send({
            msg: "Invalid ID",
        });
    }

    const data = await userGetById(id);
    if (!data) {
        res.status(404).send({
            msg: "No user found",
        });
    }

    res.send({
        msg: "Success",
        data,
    });
});

router.delete("/:id", async (req, res) => {
    res.sendStatus(501);
});
router.put("/:id", async (req, res) => {
    res.sendStatus(501);
});

export default router;
