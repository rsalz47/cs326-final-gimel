const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("."));

// This will be the database, eventually
const comments = [{user: "sample_user", msg: "I would love a hug", id: 0}];

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
