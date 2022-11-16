import {Router} from "express";
import checkToken from "../logic/checkToken.js";
import kip from "../logic/kip.js";
import validateBody from "../logic/validateBody.js";

const router = Router();
// Router.use(checkToken);

const startTime = new Date();

const fuzzerStatus = {
    cases_total: 0,
    run_time: 0,
    crash_total: 0,
    crash_uniq: 0,
    coverage: 0,
    total_coverage: 0,
};

router.get("/", (req, res) => {
    const server_run_time = Date.now() - startTime;
    const data = {
        ...fuzzerStatus,
        server_run_time,
    };
    res.send({
        msg: "Successfully fetched data from socket",
        data,
    });
});

const sfuzz_schema = kip
    .object({
        total_cases: kip.number(),
        crashes: kip.number(),
        ucrashes: kip.number(),
        coverage: kip.number(),
        cmpcov: kip.number(),
        exec_time: kip.number(),
        // Unused
        instr_count: kip.number(),
        timeouts: kip.number(),
    })
    .strict();

const sfuzz_map = {
    total_cases: "cases_total",
    crashes: "crash_total",
    ucrashes: "crash_uniq",
    coverage: "coverage",
    cmpcov: "total_coverage",
    exec_time: "run_time",
};

router.post("/", validateBody(sfuzz_schema), (req, res) => {
    Object.entries(sfuzz_map).forEach(([recv, target]) => {
        fuzzerStatus[target] = req.body[recv];
    });
    res.sendStatus(200);
});

export default router;
