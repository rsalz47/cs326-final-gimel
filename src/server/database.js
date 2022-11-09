// Temporary data entries
// Express.js could have been better to handle these
const authTokens = ["SAMPLE_TOKEN"];
const userlist = [
    {
        first: "Ronan",
        role: "A",
        handle: "rsalz47",
    },
    {
        first: "Dung",
        role: "U",
        handle: "dungwinux",
    },
    {
        first: "Gilbert",
        role: "U",
        handle: "seal9055",
    },
    {
        first: "Emery Berger",
        role: "A",
        handle: "emeryberger",
    },
];

export async function tokenGet(user) {
    return authTokens[0];
}

export async function tokenVerify(token) {
    return authTokens.includes(token);
}

export async function userVerify(username, {password}) {
    return (
        username
        && userlist.filter(({handle}) => handle === username).length === 1
    );
}

export async function userAdd(username, {password}) {
    if (
        username
        && userlist.filter(({handle}) => handle === username).length === 0
    ) {
        userlist.push({
            first: "John Doe",
            role: "U",
            handle: username,
        });
        return true;
    }

    return false;
}

export async function userGetById(id) {
    if (id >= userlist.length) {
        return null;
    }

    return userlist[id];
}

export async function userGetAll() {
    return userlist;
}
