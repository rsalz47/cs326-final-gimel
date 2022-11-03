export async function addComment(text, user) {
    await fetch("http://localhost:3001/comments/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: text, user})
    });
}

export async function verify_user(username, password) {
    console.log(username);
    console.log(password);
    console.log("verify user called");
}

export async function create_user(username, password) {
    console.log(username);
    console.log(password);
    console.log("create user called");
}
