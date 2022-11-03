import {create_user, verify_user} from './client.js'

function user_login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    verify_user(username, password);
}
window.user_login = user_login;

function user_register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    create_user(username, password);
}
window.user_register = user_register;
