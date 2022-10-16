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
}
