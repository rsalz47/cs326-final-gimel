import {getUsers, delete_user} from "./client.js";

/// Clear a div
function clear_div(element) {
    element.textContent = '';
}

/// Add the table used to manage users to the page
export async function manage_users() {
    const view = document.getElementById("view2");
    clear_div(view);

    /// Generate the head-row of this table
    function generate_table_head(table) {
        const headers = ["Name", "Role", "Action"];
        const thead = table.createTHead();
        const row = thead.insertRow();
        for (let i = 0; i < headers.length; i++) {
            let th = document.createElement("th");
            th.scope = "col";
            let text = document.createTextNode(headers[i]);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    /// Generate a table using provided data and add button to remove users
    function generate_table(table, data) {
        const tbody = table.createTBody();
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            const row = tbody.insertRow();

            let cell = row.insertCell();
            let text = document.createTextNode(element["handle"]);
            cell.appendChild(text);

            cell = row.insertCell();
            text = document.createTextNode(element["role"]);
            cell.appendChild(text);

            // Create button to remove users
            let btn = document.createElement('button');
            btn.innerHTML = "Remove";
            btn.style.background = "red";
            btn.style.margin = "10px";
            btn.onclick = function() {
                delete_user(element["handle"]);
            };
            row.appendChild(btn);
        }
    }

    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-hover");

    const result = await getUsers();
    const userData = result.data;

    generate_table_head(table);
    generate_table(table, userData);

    view.appendChild(table);
}

window.manage_users = manage_users;
