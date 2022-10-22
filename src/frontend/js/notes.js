/// Insert a note into the notes listing
function insert_note(user, text) {
    const ts = new Date();
    const notes = document.getElementById("notes");
    const li = document.createElement("li");

    li.classList.add("note");

    li.appendChild(document.createTextNode(ts.toLocaleDateString() + " : "));
    li.appendChild(document.createTextNode(ts.toLocaleTimeString()));
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
    insert_note("sample_user", msg);
    document.getElementById("cur_note").value = "";
}

/// Register event listener to send the note when the enter key is pressed
document.getElementById("cur_note").addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        send_note();
    }
});