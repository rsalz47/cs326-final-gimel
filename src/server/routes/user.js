import {Router} from "express";
const router = Router();

const userlist = [
    {
        first: "Ronan",
        role: "A",
        handle: "rsalz47",
    },
    {
        first: "Dung",
        role: "U",
        handle: "dungwinux",
    },
    {
        first: "Gilbert",
        role: "U",
        handle: "seal9055",
    },
    {
        first: "Emery Berger",
        role: "A",
        handle: "emeryberger",
    },
];

const authToken = "UMASS EXPRESS_BAD";

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {} next
 */
function checkToken(req, res, next) {
    if (req.headers.authorization === authToken) {
        next();
    } else {
        res.status(401).send({
            ok: false,
            msg: "Invalid token",
        });
    }
}

router.get("/", checkToken, (req, res) => {
    res.send({
        msg: "Success",
        data: userlist,
    });
});

router.get("/:id", checkToken, (req, res) => {
    const {id} = req.params;
    if (id >= userlist.length) {
        res.status(404).send("Error: No user found");
    }

    res.send({
        msg: "Success",
        data: userlist[id],
    });
});

router.post("/verify", (req, res) => {
    const {username, password} = req.body;
    if (userlist.filter(({handle}) => handle === username).length === 1) {
        res.send(authToken);
    } else {
        res.status(400).send("Invalid credential");
    }
});

router.post("/register", (req, res) => {
    const {username, password} = req.body;
    if (userlist.filter(({handle}) => handle === username).length === 0) {
        userlist.push({
            first: "John Doe",
            role: "U",
            handle: username,
        });
        res.send("Success");
    } else {
        res.status(400).send("Username has been taken");
    }
});

export default router;
