import {create_user, verify_user} from "./client.js";

async function user_login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const {ok, msg, data: token} = await verify_user(username, password);
    const ele = document.getElementById("login_msg");
    ele.textContent = msg;
    if (ok) {
        ele.classList.remove("alert-danger");
        ele.classList.add("alert-success");
        localStorage.setItem("token", token);
        window.location.href = "/";
    } else {
        ele.classList.remove("alert-success");
        ele.classList.add("alert-danger");
    }
}

async function user_register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const {ok, msg} = await create_user(username, password);

    const ele = document.getElementById("login_msg");
    ele.textContent = msg;
    if (ok) {
        ele.classList.remove("alert-danger");
        ele.classList.add("alert-success");
    } else {
        ele.classList.remove("alert-success");
        ele.classList.add("alert-danger");
    }
}

document.getElementById("user_login").addEventListener("click", user_login);
document
    .getElementById("user_register")
    .addEventListener("click", user_register);
