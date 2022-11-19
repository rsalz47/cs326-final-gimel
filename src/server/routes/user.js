import {Router} from "express";
import {tokenGet, userAdd, userGetById, userVerify, userGetAll} from "../database.js";
import checkToken from "../logic/checkToken.js";

const router = Router();

router.get("/", checkToken, async (req, res) => {
    const data = await userGetAll();
    res.send({
        msg: "Success",
        data,
    });
});

router.get("/:id", checkToken, async (req, res) => {
    const {id} = req.params;
    if (!id) {
        res.status(400).send("Invalid ID");
    }

    const data = await userGetById(id);
    if (!data) {
        res.status(404).send("No user found");
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

router.post("/verify", async (req, res) => {
    const {username, password} = req.body;
    if (await userVerify(username, {password})) {
        res.send({
            msg: "Valid credential",
            data: await tokenGet(username),
        });
    } else {
        res.status(400).send({
            msg: "Invalid credential",
        });
    }
});

router.post("/register", async (req, res) => {
    const {username, password} = req.body;
    if (await userAdd(username, {password, role: "U", name: "John Doe"})) {
        res.send({
            msg: "New user registered",
        });
    } else {
        res.status(400).send({
            msg: "Username has been taken",
        });
    }
});

export default router;
