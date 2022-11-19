import "dotenv/config";
import pkg from "pg";

const {Pool} = pkg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

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

export async function commentCreate({timestamp, user, msg}) {
    const cli = await pool.connect();
    const result = await cli.query(`
    INSERT INTO fizzy.comments(timestamp, name, comment)
    VALUES ('${timestamp}', '${user}', '${msg}');
    `);
    cli.release();
    return result.rowCount === 1;
}

export async function commentRead() {
    const cli = await pool.connect();
    const result = await cli.query(`
    SELECT * FROM fizzy.comments
    ORDER BY id DESC
    LIMIT 5;
    `);
    cli.release();
    return result.rows.reverse();
}

export async function commentUpdate({idToUpdate, newText}) {
    const cli = await pool.connect();
    const result = await cli.query(`
    UPDATE fizzy.comments
    SET comment='${newText}'
    WHERE id=${idToUpdate};
    `);
    cli.release();
    return result.rowCount === 1;
}

export async function commentDelete({idToDelete}) {
    const cli = await pool.connect();
    const result = await cli.query(`
    DELETE FROM fizzy.comments
    WHERE id=${idToDelete};
    `);
    cli.release();
    return result.rowCount === 1;
}

export async function db_init_project(p) {
    const client = await pool.connect();
    let my_query = "INSERT INTO fizzy.Project (name, fuzzer, target, input_dir, output_dir, time_stamp)";
    my_query += ` VALUES ('${p.name}','${p.fuzzer}', '${p.target}', '${p.input_dir}', 
        '${p.output_dir}', '${p.time_stamp}');`;

    const result = await client.query(my_query);
    client.release();
}

export async function db_get_projects() {
    const client = await pool.connect();
    let my_query = "select * from fizzy.Project";
    const result = await client.query(my_query);
    client.release();
    return result.rows;
}

export async function db_insert_stats(s) {
    const client = await pool.connect();
    let my_query = `INSERT INTO fizzy.Stats (cases_total, crash_total, crash_unique, run_time, coverage, 
        cmp_cov, instr_count, timeouts)`;

    my_query += ` VALUES (${s.cases_total}, ${s.crash_total}, ${s.crash_uniq}, ${s.run_time}, 
        ${s.coverage}, ${s.cmp_cov}, ${s.instr_count}, ${s.timeouts});`;

    await client.query(my_query);

    client.release();
}

export async function db_get_cur_stats() {
    const client = await pool.connect();
    const my_query = `SELECT * FROM fizzy.Stats ORDER BY run_time DESC LIMIT 1`;
    const res = await client.query(my_query);

    client.release();

    return res.rows[0];
}

export async function db_get_all_stats() {
    const client = await pool.connect();
    const my_query = `SELECT * FROM fizzy.Stats ORDER BY run_time DESC`;
    const res = await client.query(my_query);

    client.release();

    return res.rows;
}
