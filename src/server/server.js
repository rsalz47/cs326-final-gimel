/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import express from "express";
import session from "express-session";
import createMemoryStore from "memorystore";
const MemoryStore = createMemoryStore(session);
import passport from "passport";

import user from "./routes/user.js";
import stat from "./routes/stat.js";
import source from "./routes/source.js";
import fs from "node:fs";
import { commentCreate, commentDelete, commentRead, commentUpdate, db_init_project, db_get_projects} from "./database.js";
import path from "node:path";
import checkToken from "./logic/checkToken.js";

const app = express();
app.use(express.json());

const sessionLimit = 86400000;
app.use(session({
    secret: "hahahaha",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: sessionLimit},
    store: new MemoryStore({
        checkPeriod: sessionLimit
    }),
}));
app.use(passport.session());

let funcs = null;
// This will be the database, eventually

app.use("/users/", user);
app.use("/stats/", stat);
app.use("/sources/", source);

const json_file = "./project_dir/cfg.json";

app.use("/cfg", checkToken);

app.get("/cfg/function_list", (req, res) => {
    // Parse cfg file if it hasn't been previously parsed
    if (funcs === null) {
        funcs = JSON.parse(fs.readFileSync(json_file, "utf-8"));
    }

    res.send(Object.keys(funcs));
});

app.post("/cfg/cfg_for_func", (req, res) => {
    const {func_name} = req.body;

    // Parse cfg file if it hasn't been previously parsed
    if (funcs === null) {
        funcs = JSON.parse(fs.readFileSync(json_file, "utf-8"));
    }

    res.send(JSON.stringify(funcs[func_name]));
});

app.use("/comments", checkToken);

app.post("/comments/create", async (req, res) => {
    await commentCreate(req.body);

    res.json({ret: "comment successfully created :)"});
});

app.post("/comments/read", async (req, res) => {
    res.send(await commentRead());
});

app.post("/comments/update", async (req, res) => {
    await commentUpdate(req.body);
    res.send({ret: "comment updated"});
});

app.post("/comments/delete", async (req, res) => {
    await commentDelete(req.body);
});

app.use("/project", checkToken);

app.get("/project/data", async (req, res) => {
    let rows = await db_get_projects();
    res.send(rows);
});

app.post("/project/init", async (req, res) => {
    const data = req.body;
    const project = {
        name: "",
        time_stamp: "",
        target: "",
        fuzzer: "",
        input_dir: "",
        output_dir: "",
    };

    project.name       = data.name;
    project.fuzzer     = data.fuzzer;
    project.target     = data.target;
    project.input_dir  = data.input_dir;
    project.output_dir = data.output_dir;
    project.time_stamp = data.time_stamp;

    await db_init_project(project);
    res.sendStatus(200);
});

const loginPath = "/src/frontend/login.html";

const forceLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect(loginPath);
    }

    return next();
};

app.use("/src/frontend/css/", express.static("src/frontend/css", {
    setHeaders(res, path, stat) {
        res.type("css");
    }
}));
app.use("/src/frontend/js/", express.static("src/frontend/js", {
    setHeaders(res, path, stat) {
        res.type("js");
    }
}));

app.use("/imgs/", express.static("imgs"));

app.use(loginPath, express.static(loginPath));

app.use((req, res, next) => {
    if (req.path === loginPath) {
        return res.sendFile("login.html", {
            root: path.join(path.resolve(), "src/frontend"),
        });
    }

    if (req.path === "/src/frontend/nav.html") {
        return res.sendFile("nav.html", {
            root: path.join(path.resolve(), "src/frontend"),
        });
    }

    return next();
});

app.use(forceLogin);
app.use("/src/frontend", express.static("src/frontend"));
app.use("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.resolve(),
    });
});

app.listen(process.env.PORT || 3001);
