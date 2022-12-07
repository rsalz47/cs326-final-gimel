/// Clear a div
function clear_div(element) {
    element.textContent = '';
}

/// Add the table used to manage users to the page
function manage_users() {
    const view = document.getElementById("view2");
    clear_div(view);

    /// Generate the head-row of this table
    function generate_table_head(table) {
        const headers = ["Name", "Role", "Action"];
        const thead = table.createTHead();
        const row = thead.insertRow();
        for (header of headers) {
            let th = document.createElement("th");
            th.scope = "col";
            let text = document.createTextNode(header);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    /// Generate a table using provided data and add button to remove users
    function generate_table(table, data) {
        const tbody = table.createTBody();
        for (element of data) {
            const row = tbody.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }

            // Create button to remove users
            let btn = document.createElement('button');
            btn.innerHTML = "Remove";
            btn.style.background = "red";
            btn.style.margin = "10px";
            btn.onclick = function() {
                // TODO remove user
            };
            row.appendChild(btn);
        }
    }

    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-hover");

    // TEMP: Will be replaced with sql queries once setup
    const data = [
        { name: "Ronan", role: "Admin" },
        { name: "Gilbert", role: "User" },
        { name: "Dung", role: "User" },
        { name: "Emery", role: "Admin" },
    ];

    generate_table_head(table);
    generate_table(table, data);

    view.appendChild(table);
}
