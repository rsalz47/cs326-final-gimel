import {Router} from "express";
import checkToken from "../logic/checkToken.js";

const router = Router();
router.use(checkToken);

router.get("/", (req, res) => {
    const data = {
        cases_total: 69420,
        cases_per_sec: 0.4103,
        run_time: 17124145,
        crash_total: 999,
        crash_uniq: 2,
    };
    res.send({
        msg: "Successfully fetched data from socket",
        data,
    });
});

export default router;
