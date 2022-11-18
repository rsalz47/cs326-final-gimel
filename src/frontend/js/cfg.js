import {get_cfg_functions, get_cfg_for_func, get_hit_blocks} from './client.js'

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

/// Handle initial setup required to draw graphs onto the screen
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

/// This function is a callback that is hit when a node on the cfg is clicked. It uses a regex to
/// search the node for all possible function calls, verifies that the function call is legit by 
/// making sure it exists in our data-base, and if so it creates a drop-down that lets the user 
/// select which of the functions in this node he meant to click. Once selected, the user can hit 
/// the 'go' button to open up the cfg of the function.
function function_parse_callback() {
    const available_funcs = get_cfg_functions();
    const view = document.getElementById("view2");

    let nodes = d3.selectAll('.node,.edge');
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

async function draw_function_cfg(func_name) {
    const function_cfg = await get_cfg_for_func(func_name);
    const hit_blocks = await get_hit_blocks();

    console.log("hit1");
    console.log(hit_blocks);
    console.log(function_cfg);

    setup_screen(document.getElementById("view2"));
    add_func(func_name);

    let dotSrc = `
digraph {
    graph [label="<${func_name}>" labelloc="t", fontsize="20.0" tooltip=" "]
    node  [style="filled"]
`
    for (let i = 0; i < function_cfg.blocks.length; i++) {
        let color = "#ffffff"
        if (hit_blocks.includes(function_cfg.blocks[i].addr)) {
            console.log(function_cfg.blocks[i].addr + " should be green");
            color = "#8aff8a"
        }
        const block_text = function_cfg.blocks[i].instrs.join('\n');

        dotSrc += `    n${i} [id="n${i}" label="${block_text}" fillcolor="${color}", shape="box"]\n`
    }

    dotSrc += '\n';

    for (let i = 0; i < function_cfg.edges.length; i++) {
        const edge = function_cfg.edges[i];
        dotSrc += `    n${edge[0]} -> n${edge[1]}\n`
    }

    dotSrc += '}';

    const graphviz = d3.select("#graph").graphviz();
    graphviz.renderDot(dotSrc).on("end", function_parse_callback);
}

// Create function name-callbacks for the left view
const function_buttons = document.getElementById("function_buttons");
const functions = await get_cfg_functions();
for (let i = 0; i < functions.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = functions[i];
    btn.classList.add("option");
    btn.onclick = function() {
        draw_function_cfg(functions[i]);
    };
    function_buttons.appendChild(btn);
}

