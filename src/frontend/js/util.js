import {insert_note, send_note} from "./notes.js";
import {get_project_rows, init_project, getAllComments} from "./client.js";

export async function reloadMessageWindow() {
    const {ok, data} = await getAllComments();
    if (ok) {
        data?.forEach(({name, comment, timestamp, id}) => {
            insert_note(name, comment, timestamp, id);
        });
    }
}

document.getElementById("cur_note").addEventListener("keydown", event => {
    if (event.code === "Enter") {
        send_note();
    }
});

const my_tables = await get_project_rows();
my_tables.forEach(project => {
    const table = document.getElementById("project_table");
    const tr = table.insertRow();
    tr.insertCell().appendChild(document.createTextNode(project.name));
    tr.insertCell().appendChild(document.createTextNode(project.fuzzer));
    tr.insertCell().appendChild(document.createTextNode(project.target));
    tr.insertCell().appendChild(document.createTextNode(project.input_dir));
    tr.insertCell().appendChild(document.createTextNode(project.output_dir));
    tr.insertCell().appendChild(document.createTextNode(project.time_stamp));
});

/// Register event listener to add a project when submit button is hit
document.getElementById("project_submit").addEventListener("click", async () => {
    const project = {};
    const ts = new Date();

    project.name = document.getElementById("project_name").value;
    project.fuzzer = document.getElementById("fuzzer_name").value;
    project.target = document.getElementById("bin_path").value;
    project.input_dir = document.getElementById("in_dir").value;
    project.output_dir = document.getElementById("out_dir").value;
    project.time_stamp = ts.toLocaleDateString();

    await init_project(project);
    window.location.reload();
});

function loadHomepage() {
    document.getElementById("notes").innerHTML = "";
    reloadMessageWindow();
}

loadHomepage();
setInterval(loadHomepage, 1000 * 2);

