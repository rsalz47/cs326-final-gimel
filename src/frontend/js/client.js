/* eslint-disable prefer-arrow-callback */
/* eslint-disable camelcase */
/* eslint-disable quote-props */
import {insert_note} from "./notes.js";

export async function addComment(text, user, timestamp, id) {
    await fetch("/comments/create", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({msg: text, user, timestamp, id})
    });
}

export async function get_cfg_functions() {
    const result = await fetch("/cfg/function_list");
    return result.json();
}

export async function get_cfg_for_func(func_name) {
    const result = await fetch("/cfg/cfg_for_func", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({func_name}),
    });

    return result.json();
}

export async function get_hit_blocks() {
    const result = await fetch("/cfg/hit_blocks");
    return result.json();
}

/// Return all the currently existing fuzzer configs
export async function get_fuzzers() {
}

export async function getAllComments() {
    const resp = await fetch("/comments/read", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: ""
    });
    const messages = await resp.json();
    window.numMsg = 0;
    messages.forEach(function (msg) {
        insert_note(msg.user, msg.msg, msg.timestamp, window.numMsg);
        window.numMsg++;
    });
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
    return {
        ok: res.ok,
        ...await res.json(),
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

    return {
        ok: res.ok,
        ...await res.json(),
    };
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

export async function getStats() {
    const res = await fetch("/stats", {
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

export async function getFileList() {
    const res = await fetch("/sources/list", {
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

export async function getFile(path) {
    const endpoint = "/sources/file";
    const params = {path};
    const res = await fetch(endpoint + "?" + new URLSearchParams(params).toString(), {
        method: "GET",
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}
