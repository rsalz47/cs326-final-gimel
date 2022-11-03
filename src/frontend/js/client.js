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

<<<<<<< HEAD
export async function get_cfg_functions() {
    let result = await fetch("http://localhost:3001/cfg/function_list");
    return await result.json();
}

export async function get_cfg_for_func(func_name) {
    let result = await fetch("http://localhost:3001/cfg/cfg_for_func", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({func_name: func_name }),
    });

    return await result.json();
}

=======
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


>>>>>>> 7d162abbd859f1c1173b807a5e0b4ed941f5116b
export async function verify_user(username, password) {
    console.log(username);
    console.log(password);
    console.log("verify user called");
}

export async function create_user(username, password) {
    console.log(username);
    console.log(password);
    console.log("create user called");
}

export async function emit_cfg(cfg) {
    console.log("Emitting: " + cfg);
}
