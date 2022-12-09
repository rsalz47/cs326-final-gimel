import {Router} from "express";
import checkToken from "../logic/checkToken.js";

import {db_get_all_stats, db_get_cur_stats, db_insert_stats} from "../database.js";

const router = Router();

router.use(checkToken);

const startTime = new Date();

const fuzzerStatus = {
    cases_total: 0,
    crash_total: 0,
    crash_uniq: 0,
    run_time: 0,
    coverage: 0,
    cmp_cov: 0,
    instr_count: 0,
    timeouts: 0
};

router.get("/", async (req, res) => {
    const server_run_time = Date.now() - startTime;
    const cur_stats = await db_get_cur_stats();

    const data = {
        ...cur_stats,
        server_run_time,
    };

    res.send({
        msg: "Successfully fetched data from socket",
        data,
    });
});

router.get("/all", async (req, res) => {
    const data = await db_get_all_stats();

    res.send({
        msg: "Successfully fetched data from socket",
        data,
    });
});

const sfuzz_map = {
    total_cases: "cases_total",
    crashes: "crash_total",
    ucrashes: "crash_uniq",
    coverage: "coverage",
    cmpcov: "cmp_cov",
    exec_time: "run_time",
    instr_count: "instr_count",
    timeouts: "timeouts",
};

const hit_blocks = [];

router.post("/", (req, res) => {
    Object.entries(sfuzz_map).forEach(([recv, target]) => {
        fuzzerStatus[target] = req.body[recv];
    });

    db_insert_stats(fuzzerStatus);

    res.sendStatus(200);
});

router.post("/cov/", (req, res) => {
    const data = req.body;
    hit_blocks.push(...data);
    res.sendStatus(200);
});

router.get("/cov/", (req, res) => {
    res.send(hit_blocks);
});

export default router;
