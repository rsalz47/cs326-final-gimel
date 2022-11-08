/* eslint-disable camelcase */

import {addComment} from "./client.js";

/// Insert a note into the notes listing
export function insert_note(user, text, timestamp) {
    const notes = document.getElementById("notes");
    const li = document.createElement("li");

    li.classList.add("note");

    li.appendChild(document.createTextNode(timestamp));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(text));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(" - " + user));
    notes.appendChild(li);
}

/// Read the cur_note field and save the note to the database-notes listing before clearing the
/// field
function send_note() {
    const msg = document.getElementById("cur_note").value;
    const ts = new Date();
    const timestamp = ts.toLocaleDateString() + " : " + ts.toLocaleTimeString();
    insert_note("sample_user", msg, timestamp);
    addComment(msg, "sample_user", timestamp);
    document.getElementById("cur_note").value = "";
}

window.send_note = send_note;

