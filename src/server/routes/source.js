import {Router} from "express";
import checkToken from "../logic/checkToken.js";
import {getFile, getFileList} from "../storage.js";

const router = Router();

router.use(checkToken);

router.get("/list", async (req, res) => {
    res.send({
        msg: "Successfully fetched file list",
        data: await getFileList(),
    });
});

router.get("/file", async (req, res) => {
    const {path} = req.query;
    const item = await getFile(path);
    if (item) {
        res.send({
            msg: "Successfully copied file",
            data: item,
        });
    } else {
        res.status(404).send({
            msg: `Cannot find ${path} in server`,
        });
    }
});

export default router;
