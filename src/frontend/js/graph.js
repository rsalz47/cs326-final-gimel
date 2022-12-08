// eslint warning disablers

import {getStats, getAllStats} from "./client.js";

// Various variables
// First checkbox on LHS of graph page, used to show/hide graph1
// Second checkbox on LHS of graph page, used to un/set logarithmic scale
const cases_time = document.getElementById("cases_time");
const cases_time_log = document.getElementById("cases_time_log");

// Left pane of webpage
// eslint-disable-next-line no-unused-vars
const leftPane = document.getElementById("view1");

// Logarithmic scale for graph drawing
const logarithmicScale = {myScale: {
    type: "logarithmic",
    position: "right"
}};

// Default scale for graph drawig
const defaultScale = {
    yAxes: [{
        ticks: {
            beginAtZero: false
        }
    }]
};

// Globals used in graph drawing
let chart1 = null;
const currScale = defaultScale;

async function drawGraph(x_axis, y_axis, x_name, y_name) {
    const graph = document.getElementById("this_graph");

    const lineData = {
        labels: x_axis,
        datasets: [{
            label: x_name + " / " + y_name,
            data: y_axis,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.5
        }]
    };

    chart1 = new Chart(graph, {
        type: "line",
        data: lineData,
        options: {
            scales: currScale,
            legend: {
                display: false
            }
        }
    });

}

async function setup_x_axis(value_to_read, log_scale, divident) {
    let res = await getStats();
    const {data} = res;
    const num_x_slices = 10;
    const x_data = data[value_to_read] / divident;
    const x_axis = [];

    if (log_scale) {
        const base = 2;
        let i = 0;
        while (true) {
            x_axis.push(Math.floor(base ** i));
            if (x_data / (base ** i) <= 0) {
                break;
            }

            i++;
        }
    } else {
        for (let i = 0; i < num_x_slices; i++) {
            x_axis.push(Math.floor((x_data / num_x_slices) * i));
        }
    }
    return x_axis;
}

// Fuzz cases per second (x=time, y=fcps)
{
    cases_time.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", false, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => 
            ({ [e["run_time"]]: (e["cases_total"] / (e["run_time"] / 1000))}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "fcps", "run_time");
    });

    cases_time_log.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", true, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => 
            ({ [e["run_time"]]: (e["cases_total"] / (e["run_time"] / 1000))}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "fcps", "run_time");
    });
}

// Coverage per second
{
    coverage_time.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", false, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => ({ [e["run_time"]]: (e["coverage"] )}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "coverage", "run_time");
    });

    coverage_time_log.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", true, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => ({ [e["run_time"]]: (e["coverage"] )}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "coverage", "run_time");
    });
}

// Unique crashes per second
{
    crashu_time.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", false, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => ({ [e["run_time"]]: (e["crash_unique"] )}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "unique crashes", "run_time");
    });

    crashu_time_log.addEventListener("click", async () => {
        const x_axis = await setup_x_axis("run_time", true, 1000);
        const res = await getAllStats();
        const all_data = res.data;
        const y_axis = all_data.map(e => ({ [e["run_time"]]: (e["crash_unique"] )}));
        let y_axis_final = [];
        for (let i = 0; i < x_axis.length; i++) {
            y_axis_final.push(y_axis[x_axis[i]]);
        }
        y_axis_final = y_axis_final.map(e => e != undefined ? Object.values(e)[0] : 0 ).reverse();
        drawGraph(x_axis, y_axis_final, "unique crashes", "run_time");
    });
}
