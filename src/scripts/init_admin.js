import {userAdd} from "../server/database.js";
await userAdd("admin", {password: "admin", role: "A"});
