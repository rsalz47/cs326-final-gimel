/// Clear a div
function clear_div(element) {
    element.textContent = '';
}

/// Maintains a buffer of functions we have displayed on the graph. This lets us use back buttons to
/// go back to previous functions after navigating between functions
const function_buffer = []

/// Add a function to the global function_buffer (basically maintained as a stack of function calls
function add_func(name) {
    function_buffer.push(name);
}

/// Handle initial setup required to draw graphs onto the scrren
function setup_screen(view) {
    clear_div(view);
    const func_div = document.getElementById("func_selection");
    if (func_div != null) {
        func_div.remove();
    }

    // Initial setup to create div that holds to arrow-buttons to navigate back and forth through 
    // the graphs
    const nav_div = document.createElement("div");
    const btn1 = document.createElement('button');
    btn1.innerHTML = "<";
    btn1.onclick = function() {
        if (function_buffer.length >= 2) {
            function_buffer.pop()
            window[function_buffer.pop()]();
        }
    };

    nav_div.appendChild(btn1);
    view.appendChild(nav_div);

    // Initial setup to create div that includes the graph
    const graph_div = document.createElement("div");
    const graph = document.createElement("graph");
    graph_div.appendChild(graph);
    graph_div.id = "graph";
    graph.setAttribute("text-align", "left");
    view.appendChild(graph_div);
}

/// Draw the cfg for a hardcoded function called "main". Once we add database support this will 
/// change to instead draw the nodes based on information made available through the db.
function main() {
    setup_screen(document.getElementById("view2"));
    add_func("main");

    // Use the d3-graphviz library to render nodes for the cfg onto the screen
    {
        var dotSrc = `
digraph {
    graph [label="<main>" labelloc="t", fontsize="20.0" tooltip=" "]
    node  [style="filled"]
    n1 [id="n1" label="int x = 5;\nint ret;\nif (x > 4)" fillcolor="#78e3aa", shape="box"]
    n2 [id="n2" label="ret  = func_1();\nret += func_2();" fillcolor="#78e3aa", shape="box"]
    n3 [id="n3" label="ret = func_3()" fillcolor="#ffffff", shape="box"]
    n4 [id="n4" label="return ret;" fillcolor="#78e3aa", shape="box"]

    n1 -> n2 [label="T"]
    n1 -> n3 [label="F"]
    n2 -> n4 
    n3 -> n4 
}`;
        const graphviz = d3.select("#graph").graphviz();
        graphviz.renderDot(dotSrc).on("end", function_parse_callback);
    }
}

/// This function is a callback that is hit when a node on the cfg is clicked. It uses a regex to
/// search the node for all possible function calls, verifies that the function call is legit by 
/// making sure it exists in our data-base, and if so it creates a drop-down that lets the user 
/// select which of the functions in this node he meant to click. Once selected, the user can hit 
/// the 'go' button to open up the cfg of the function.
function function_parse_callback() {
    const available_funcs = ["main", "func_1", "func_2", "func_3"];
    const view = document.getElementById("view2");

    nodes = d3.selectAll('.node,.edge');
    nodes.on("click", function () {
            // Regex for parsing function names (source below):
            // https://stackoverflow.com/questions/47663648/javascript-regex-getting-function-name-from-string
            const functions = this.innerHTML.match(/([a-zA-Z_{1}][a-zA-Z0-9_]+)(?=\()/g);
            const found_funcs = [];
            if (functions === null) {
                return;
            }

            // Remove possible previous instances of this div created by this callback
            const func_div = document.getElementById("func_selection");
            if (func_div != null) {
                func_div.remove();
            }

            // Check if the found function-name is an actual string in our db (hardcoded for now)
            for (let i = 0; i < functions.length; i++) {
                let f = functions[i];
                if (available_funcs.includes(f)) {
                    found_funcs.push(f);
                }
            }

            // Create a dropdown button to select one of the functions listed in the pressed node
            const div = document.createElement("div");
            div.id = "func_selection";
            const select = document.createElement("select");
            select.id = "func_name";
            select.style.margin = "20px";

            // Create an option for each function
            for (let i = 0; i < found_funcs.length; i++) {
                const option = document.createElement("option");
                option.setAttribute("value", found_funcs[i]);
                option.text = found_funcs[i];
                select.appendChild(option);
            }
            div.appendChild(select);

            // Create a button that will let the user select a function from the drop-down and open
            // it up in the graphview
            const btn = document.createElement('button');
            btn.innerHTML = "Go";
            btn.onclick = function() {
                let func = document.getElementById("func_name").value;
                window[func]();
            };

            div.appendChild(btn);
            view.appendChild(div);
        });
}
/// Draw the cfg for a hardcoded function called "func_1". Once we add database support this will 
/// change to instead draw the nodes based on information made available through the db.
function func_1() {
    setup_screen(document.getElementById("view2"));
    add_func("func_1");

    // Use the d3-graphviz library to render nodes for the cfg onto the screen
    {
        var dotSrc = `
digraph {
    graph [label="<func_1>" labelloc="t", fontsize="20.0" tooltip=" "]
    node  [style="filled"]
    n1 [id="n1" label="// This function is hit" fillcolor="#78e3aa", shape="box"]
}
`;
        d3.select("#graph").graphviz().renderDot(dotSrc);
    }
}

/// Draw the cfg for a hardcoded function called "func_2". Once we add database support this will 
/// change to instead draw the nodes based on information made available through the db.
function func_2() {
    setup_screen(document.getElementById("view2"));
    add_func("func_2");

    // Use the d3-graphviz library to render nodes for the cfg onto the screen
    {
        var dotSrc = `
digraph {
    graph [label="<func_2>" labelloc="t", fontsize="20.0" tooltip=" "]
    node  [style="filled"]
    n1 [id="n1" label="// This function is hit" fillcolor="#78e3aa", shape="box"]
}
`;
        d3.select("#graph").graphviz().renderDot(dotSrc);
    }
}

/// Draw the cfg for a hardcoded function called "func_3". Once we add database support this will 
/// change to instead draw the nodes based on information made available through the db.
function func_3() {
    setup_screen(document.getElementById("view2"));
    add_func("func_3");

    // Use the d3-graphviz library to render nodes for the cfg onto the screen
    {
        var dotSrc = `
digraph {
    graph [label="<func_3>" labelloc="t", fontsize="20.0" tooltip=" "]
    node  [style="filled"]
    n1 [id="n1" label="// This function is not hit" fillcolor="#ffffff", shape="box"]
}
`;
        d3.select("#graph").graphviz().renderDot(dotSrc);
    }
}
