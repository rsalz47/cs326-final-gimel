/* eslint-disable camelcase */
/* eslint-disable quote-props */
import {insert_note} from "./notes.js";

export async function addComment(text, user) {
    await fetch("http://localhost:3001/comments/create", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({msg: text, user})
    });
}

export async function getAllComments() {
    const resp = await fetch("http://localhost:3001/comments/read", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: ""
    });
    const messages = await resp.json();
    messages.forEach(msg => insert_note(msg.user, msg.msg));
}

function loadHomepage() {
    console.log("loading");
    getAllComments();
}

window.onload = loadHomepage(); // NOTE: VERY HACKY :)
