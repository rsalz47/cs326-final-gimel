import {getStats, getUsers} from "./client.js";

async function populateUser() {
    const {ok, data: userData} = await getUsers();
    const ele = document.getElementById("user_table");
    ele.innerHTML = "";
    if (!ok) {
        const info = document.createElement("tr");
        info.classList.add("alert", "alert-danger");
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

async function populateStat() {
    const {ok, data: statData} = await getStats();
    const ele = document.getElementById("stat_table");
    ele.innerHTML = "";
    if (!ok) {
        const info = document.createElement("tbody");
        info.classList.add("alert", "alert-danger");
        const text = document.createElement("i");
        text.textContent = "Cannot get statistics";
        info.appendChild(text);
        ele.appendChild(info);
        return;
    }

    const string = {
        cases_total: "Total Cases",
        cases_per_sec: "Cases Per Second",
        run_time: "Runtime",
        crash_total: "Total Crashes",
        crash_uniq: "Unique Crashes",
    };

    Object.entries(statData).forEach(([key, value]) => {
        // <tbody>
        //     <td>Total Cases</td>
        //     <td>69,420</td>
        // </tbody>
        const node = document.createElement("tbody");

        const titleA = document.createElement("td");
        const titleDec = document.createElement("b");
        titleDec.textContent = string[key];
        titleA.appendChild(titleDec);
        node.appendChild(titleA);

        const valueA = document.createElement("td");
        valueA.textContent = value;
        node.appendChild(valueA);

        ele.appendChild(node);
    });
}

populateUser();
populateStat();
