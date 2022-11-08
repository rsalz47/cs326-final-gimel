import {getUsers} from "./client.js";

async function populateUser() {
    const {ok, data: userData} = await getUsers();
    const ele = document.getElementById("user_table");
    if (!ok) {
        const info = document.createElement("tr");
        const text = document.createElement("i");
        text.textContent = "Cannot get users";
        info.appendChild(text);
        ele.appendChild(info);
        return;
    }

    userData.forEach(({role, handle, first}) => {
        // <tr class="table-info">
        //     <th scope="row"><b>A</b></th>
        //     <td>Ronan</td>
        //     <td>@rsalz47</td>
        // </tr>
        const node = document.createElement("tr");
        if (role === "A") {
            node.classList.add("table-info");
        }

        const roleA = document.createElement("th");
        roleA.scope = "row";
        const roleText = document.createElement("b");
        roleText.textContent = role;
        roleA.appendChild(roleText);
        node.appendChild(roleA);

        const nameA = document.createElement("td");
        nameA.textContent = first;
        node.appendChild(nameA);

        const handleA = document.createElement("td");
        handleA.textContent = handle;
        node.appendChild(handleA);
        ele.appendChild(node);
    });
}

populateUser();
