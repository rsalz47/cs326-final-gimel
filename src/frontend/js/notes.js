
import {addComment} from "./client.js";
import {reloadMessageWindow} from "./util.js";

async function deleteEventListener(parentID) {
    const resp = await fetch("/comments/delete", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({idToDelete: parseInt(parentID.slice(4), 10)})
    });
}

async function editEventListener(parentID) {
    const inp = document.getElementById("cur_note");
    const resp = await fetch("/comments/update", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({idToUpdate: parseInt(parentID.slice(4), 10), newText: inp.value})
    });
    inp.value = "";
}

/// Insert a note into the notes listing
export function insert_note(user, text, timestamp, id) {
    const notes = document.getElementById("notes");
    const li = document.createElement("li");

    li.classList.add("note");
    li.setAttribute("id", "note" + id);

    li.appendChild(document.createTextNode((new Date(timestamp)).toLocaleString()));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(text));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(" - " + user));

    li.appendChild(document.createElement("br"));

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    // Add eventListener
    deleteButton.addEventListener("click",
        () => deleteEventListener(deleteButton.parentElement.id));
    li.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.addEventListener("click",
        () => editEventListener(editButton.parentElement.id));
    li.appendChild(editButton);

    notes.appendChild(li);
}

/// Read the cur_note field and save the note to the database-notes listing before clearing the
/// field
export function send_note() {
    const msg = document.getElementById("cur_note").value;
    addComment(msg);
    document.getElementById("cur_note").value = "";
    reloadMessageWindow();
}

window.send_note = send_note;

