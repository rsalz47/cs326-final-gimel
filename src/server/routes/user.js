import {Router} from "express";
import {
    userAdd,
    userGetById,
    userGetAll,
    userGet,
    userDelete,
    userDeleteById,
} from "../database.js";
import auth from "../logic/auth.js";
import checkToken from "../logic/checkToken.js";

const router = Router();

router.post("/register", async (req, res) => {
    const {username, password, name} = req.body;
    const validate = username !== "" && password !== "" && name !== "";
    if (validate && (await userAdd(username, {password, role: "U", name}))) {
        res.send({
            msg: "New user registered",
        });
    } else {
        res.status(400).send({
            msg: "Failed to register",
        });
    }
});

router.post("/verify", auth, (req, res) => res.send({
    msg: "Valid credential",
    data: req.body.username,
}));

router.get("/logout", (req, res) => {
    req.logout();
    res.send({
        msg: "Logout successfull"
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
    const nid = parseInt(id, 10);
    if (!id || isFinite(nid)) {
        return res.status(400).send({
            msg: "Invalid ID",
        });
    }

    const data = await userGetById(nid);
    if (!data) {
        return res.status(404).send({
            msg: "No user found",
        });
    }

    res.send({
        msg: "Success",
        data,
    });
});

router.delete("/:id", async (req, res) => {
    if (req.user?.id !== "A") {
        return res.status(401).send({
            msg: "Unauthorized",
        });
    }

    const {id} = req.params;
    const nid = parseInt(id, 10);
    if (!id || isFinite(nid)) {
        return res.status(400).send({
            msg: "Invalid ID",
        });
    }

    const data = await userDeleteById(nid);
    if (!data) {
        return res.status(404).send({
            msg: "No user found",
        });
    }

    res.send({
        msg: "Success",
        data,
    });
});

router.get("/handle/:handle", async (req, res) => {
    const {handle} = req.params;
    const data = await userGet(handle);
    if (!data) {
        return res.status(404).send({
            msg: "No user found",
        });
    }

    res.send({
        msg: "Success",
        data,
    });
});

router.delete("/handle/:handle", async (req, res) => {
    if (req.user?.id !== "A") {
        return res.status(401).send({
            msg: "Unauthorized",
        });
    }

    const {handle} = req.params;
    const data = await userDelete(handle);
    if (!data) {
        return res.status(404).send({
            msg: "No user found",
        });
    }

    res.send({
        msg: "Success",
        data,
    });
});

export default router;
