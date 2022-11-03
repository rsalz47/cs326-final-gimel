const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("."));
let fs = require('fs')

<<<<<<< HEAD
const comments = [];
let funcs = null;
=======
// This will be the database, eventually
const comments = [{user: "sample_user", msg: "I would love a hug", id: 0}];
>>>>>>> 7d162abbd859f1c1173b807a5e0b4ed941f5116b

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

<<<<<<< HEAD
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
=======
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
>>>>>>> 7d162abbd859f1c1173b807a5e0b4ed941f5116b
});

app.listen(3001);
