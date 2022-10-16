function clear_div(element) {
    element.textContent = '';
}

function display_fuzzer() {
    const view = document.getElementById("view2");
    clear_div(view);

    // Add selection to chose the fuzzer
    const select = document.createElement("select");
    {
        select.style.margin = "20px";

        let option = document.createElement("option");
        option.setAttribute("value", "sfuzz");
        option.text = "sfuzz";
        select.appendChild(option);

        option = document.createElement("option");
        option.setAttribute("value", "libafl");
        option.text = "libafl";

        select.appendChild(option);
        view.appendChild(select);
    }

    let fuzzer = select.value;

    // Add divs to the config that lets the user define a custom parse structure
    {
        // TEMPORARY: This would usually be retrieved from sql databse based on the selected fuzzer, 
        // but since we have not yet set that up, it is currently still hardcoded
        let parse_struct = `\
line-graph {
        [1] 0x01;
        [2,9] x_val;
        [10,17] y_val;
        [18,19] x_name_len;
        [20,21] y_name_len;
        [22,22+x_name_len] x_name;
        [23+x_name_len+1,23+x_name_len+y_name_len] y_name;
}

source-cov {
        [1] 0x02;
        [2,5] line_number;
        [6,7] file_path_len;
        [8,8+file_name_len] file_path;
}`;

        let div = document.createElement("div");
        div.appendChild(document.createTextNode("Edit Input Structure"));
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createTextNode(`Be precise, these values, measured in bytes, are 
            used to parse your fuzzers output into the visualizations`));

        view.appendChild(div);

        div = document.createElement("div");
        const input = document.createElement("textarea");
        input.value = parse_struct;
        input.setAttribute("cols", 60);
        input.setAttribute("rows", 16);
        div.appendChild(input);
        view.appendChild(div);

        let button = document.createElement("button");
        button.innerHTML = "Submit";
        button.onclick = function () {
            // Save newly configured parse structure to sql database
        };

        view.appendChild(button);
    }
}

function manage_users() {
    const view = document.getElementById("view2");
    clear_div(view);

    function generateTableHead(table) {
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

    function generateTable(table, data) {
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
                console.log("Removed user");
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

    generateTableHead(table);
    generateTable(table, data);

    view.appendChild(table);
}
