const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("."));
let fs = require('fs')

const comments = [];
let funcs = null;

app.post("/comments/create", (req, res) => {
    const ts = new Date();
    let data = req.body
    comments.push({
        timestamp: ts.toLocaleDateString() + " : " + ts.toLocaleTimeString(),
        user: data["user"],
        msg: data["msg"]
    });

    res.json("comment successfully created :)");
});

app.get("/cfg/function_list", (req, res) => {
    // Parse cfg file if it hasn't been previously parsed
    if (funcs === null) {
        funcs = JSON.parse(fs.readFileSync(json_file, "utf-8"));
    }


    res.send(Object.keys(funcs));
});

json_file = "./project_dir/cfg.json"
app.post("/cfg/cfg_for_func", (req, res) => {
    let func_name = req.body.func_name;

    // Parse cfg file if it hasn't been previously parsed
    if (funcs === null) {
        funcs = JSON.parse(fs.readFileSync(json_file, "utf-8"));
    }

    res.send(JSON.stringify(funcs[func_name]));
});

app.listen(3001);
