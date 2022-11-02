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