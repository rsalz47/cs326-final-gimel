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

export async function get_cfg_functions() {
    const result = await fetch("http://localhost:3001/cfg/function_list");
    return result.json();
}

export async function get_cfg_for_func(func_name) {
    const result = await fetch("http://localhost:3001/cfg/cfg_for_func", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({func_name}),
    });

    return result.json();
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

export async function verify_user(username, password) {
    console.log(username);
    console.log(password);
    const res = await fetch("/users/verify", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });
    const token = res.ok ? await res.text() : null;
    return {
        ok: res.ok,
        token,
    };
}

export async function create_user(username, password) {
    console.log(username);
    console.log(password);
    const res = await fetch("/users/register", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });

    console.log(await res.text());
}

export async function getUsers() {
    const res = await fetch("/users", {
        method: "GET",
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}

export async function emit_cfg(cfg) {
    console.log("Emitting: " + cfg);
}
