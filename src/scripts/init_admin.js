import {userAdd} from "../server/database";
await userAdd("admin", {password: "admin"}, {roles: "A"});
