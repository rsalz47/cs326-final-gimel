import {getUsers, delete_user} from "./client.js";

/// Clear a div
function clear_div(element) {
    element.textContent = "";
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
            const th = document.createElement("th");
            th.scope = "col";
            const text = document.createTextNode(headers[i]);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    /// Generate a table using provided data and add button to remove users
    function generate_table(table, data) {
        const tbody = table.createTBody();
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const row = tbody.insertRow();

            let cell = row.insertCell();
            let text = document.createTextNode(element.handle);
            cell.appendChild(text);

            cell = row.insertCell();
            text = document.createTextNode(element.role);
            cell.appendChild(text);

            // Create button to remove users
            const btn = document.createElement("button");
            btn.innerHTML = "Remove";
            btn.style.background = "red";
            btn.style.margin = "10px";
            btn.addEventListener("click", async () => {
                await delete_user(element.handle);
                window.location.reload();
            });

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
