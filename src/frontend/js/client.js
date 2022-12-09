import {insert_note} from "./notes.js";

function getProperHeader() {
    return {
        "Accept": "application/json",
        "Content-Type": "application/json"
    };
}

export async function addComment(text, user, timestamp) {
    await fetch("/comments/create", {
        method: "POST",
        headers: getProperHeader(),
        body: JSON.stringify({
            msg: text,
            user,
            timestamp,
        }),
    });
}

export async function get_cfg_functions() {
    const result = await fetch("/cfg/function_list", {
        method: "GET",
        headers: getProperHeader(),
    });
    return result.json();
}

export async function get_cfg_for_func(func_name) {
    const result = await fetch("/cfg/cfg_for_func", {
        method: "POST",
        headers: getProperHeader(),
        body: JSON.stringify({func_name}),
    });

    return result.json();
}

export async function get_hit_blocks() {
    const result = await fetch("/stats/cov", {
        method: "POST",
        headers: getProperHeader(),
    });
    return result.json();
}

export async function logout() {
    await fetch("/users/clear", {
        method: "GET",
        headers: getProperHeader(),
    });
}

/// Initialize a new project
export async function init_project(project) {
    const resp = await fetch("/project/init", {
        method: "POST",
        headers: getProperHeader(),
        body: JSON.stringify(project)
    });
    return resp.ok;
}

export async function get_project_rows() {
    const resp = await fetch("/project/data", {
        method: "GET",
        headers: getProperHeader(),
    });
    return resp.json();
}

export async function getAllComments() {
    const resp = await fetch("/comments/read", {
        method: "POST",
        headers: getProperHeader(),
    });
    const messages = await resp.json();
    messages.forEach(({name, comment, timestamp, id}) => {
        insert_note(name, comment, timestamp, id);
    });
}

export async function verify_user(username, password) {
    const res = await fetch("/users/verify", {
        method: "POST",
        headers: getProperHeader(),
        body: JSON.stringify({username, password})
    });
    return {
        ok: res.ok,
        ...await res.json(),
    };
}

export async function create_user(username, password) {
    const res = await fetch("/users/register", {
        method: "POST",
        headers: getProperHeader(),
        body: JSON.stringify({username, password, name: "John Doe"})
    });

    return {
        ok: res.ok,
        ...await res.json(),
    };
}

export async function getUsers() {
    const res = await fetch("/users", {
        method: "GET",
        headers: getProperHeader(),
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}

export async function getStats() {
    const res = await fetch("/stats", {
        method: "GET",
        headers: getProperHeader(),
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}

export async function getAllStats() {
    const res = await fetch("/stats/all", {
        method: "GET",
        headers: getProperHeader(),
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}

export async function getFileList() {
    const res = await fetch("/sources/list", {
        method: "GET",
        headers: getProperHeader(),
    });
    return {
        ok: res.ok,
        ...await res.json()
    };
}

export async function getFile(path) {
    const endpoint = "/sources/file";
    const params = {path};
    const res = await fetch(
        endpoint + "?" + new URLSearchParams(params).toString(),
        {
            method: "GET",
            headers: getProperHeader(),
        }
    );
    return {
        ok: res.ok,
        ...await res.json()
    };
}

/// Delete a user
export async function delete_user(user) {
    const res = await fetch(`/users/handle/${user}`, {
        method: "DELETE",
        headers: getProperHeader(),
    });

    return {
        ok: res.ok,
        ...await res.json()
    };
}
