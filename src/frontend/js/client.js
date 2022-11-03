export async function addComment(text, user) {
    await fetch("http://localhost:3001/comments/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: text, user})
    });
}

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
