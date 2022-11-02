const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("."));

const comments = [];

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

app.post("/comments/read", (req, res) => {
    
});

app.listen(3001);
