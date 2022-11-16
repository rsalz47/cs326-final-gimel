/* eslint-disable camelcase */
import express from "express";
import user from "./routes/user.js";
import stat from "./routes/stat.js";
import fs from "node:fs";
import KaitaiStream from 'kaitai-struct/KaitaiStream.js';
import {Sfuzz} from "../../fuzzer_config/Sfuzz.js";

const fuzzer = 
    fs.readFileSync("/home/seal/github/cs326-final-gimel/fuzzer_config/line_graph_data.bin");
//const parsedElf = new Sfuzz(new KaitaiStream(fileContent));
//console.log(parsedElf);
console.log(fuzzer);

const app = express();
app.use(express.json());
app.use(express.static("."));

let funcs = null;
// This will be the database, eventually
const comments = [{user: "sample_user", msg: "I would love a hug", id: 0}];

app.use("/users/", user);
app.use("/stats/", stat);

const json_file = "./project_dir/cfg.json";

app.post("/comments/create", (req, res) => {
    const temp = new Date();
    const data = req.body;
    comments.push({
        timestamp: temp.toLocaleDateString() + " : " + temp.toLocaleTimeString(),
        user: data.user,
        msg: data.msg,
        id: data.id
    });

    res.json({ret: "comment successfully created :)"});
});

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

app.get("/config/fuzzers", (req, res) => {
    res.send(Object.keys(funcs));
});

app.post("/comments/read", (req, res) => {
    res.send(comments);
});

app.post("/comments/update", (req, res) => {
    const data = req.body;
    const temp = new Date();
    comments[data.id].msg = data.msg;
    comments[data.id].timestamp = temp.toLocaleDateString + " : " + temp.toLocaleTimeString();
});

app.post("/comments/delete", (req, res) => {
    const index = req.body.id;
    comments.splice(index, 1);
    res.json({ret: `comment ${index} successfully deleted >:)`});
});

app.listen(3001);
