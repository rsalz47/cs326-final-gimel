/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import express from "express";
import user from "./routes/user.js";
import stat from "./routes/stat.js";
import source from "./routes/source.js";
import fs from "node:fs";
import "dotenv/config";

import {db_init_project, db_get_projects} from "./database.js";

const app = express();
app.use(express.json());
app.use(express.static("."));

import pkg from "pg";
const {Pool} = pkg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const project = {
    name: "",
    time_stamp: "",
    target: "",
    fuzzer: "",
    input_dir: "",
    output_dir: "",
};

console.log(process.env.DATABASE_URL);

let funcs = null;
// This will be the database, eventually
const comments = [{user: "sample_user", msg: "I would love a hug", id: 0, timestamp: "47"}];

app.use("/users/", user);
app.use("/stats/", stat);
app.use("/sources/", source);

const json_file = "./project_dir/cfg.json";

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

app.post("/comments/create", (req, res) => {
    const data = req.body;
    comments.push({
        timestamp: data.timestamp,
        user: data.user,
        msg: data.msg,
        id: data.id
    });
    console.log(comments.at(-1));

    res.json({ret: "comment successfully created :)"});
});

app.post("/comments/read", (req, res) => {
    res.send(comments);
});

app.post("/comments/update", (req, res) => {
    const data = req.body;
    console.log(data);
    comments[req.body.idToUpdate.slice(4)].msg = req.body.newText;
});

app.post("/comments/delete", (req, res) => {
    const index = req.body.idToDelete.slice(4);
    comments.splice(index, 1);
    console.log(comments);
    console.log(`comment ${index} successfully deleted >:)`);
});

app.get("/project/data", async (req, res) => {
    let rows = await db_get_projects();
    res.send(rows);
});

app.post("/project/init", async (req, res) => {
    const data = req.body;

    project.name       = data.name;
    project.fuzzer     = data.fuzzer;
    project.target     = data.target;
    project.input_dir  = data.input_dir;
    project.output_dir = data.output_dir;
    project.time_stamp = data.time_stamp;

    await db_init_project(project);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3001);
