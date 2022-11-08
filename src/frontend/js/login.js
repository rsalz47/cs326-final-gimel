import { create_user, verify_user } from "./client.js";

async function user_login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const {ok, token} = await verify_user(username, password);
    if (ok) {
        localStorage.setItem("token", token);
        window.location.href = "/";
    }
}

function user_register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    create_user(username, password);
}

document.getElementById("user_login").addEventListener("click", user_login);
document
    .getElementById("user_register")
    .addEventListener("click", user_register);
