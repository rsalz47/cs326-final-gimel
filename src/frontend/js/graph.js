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

async function drawGraph(x, y, log_scale, divide_x_by) {
    const graph = document.getElementById("this_graph");
    let res = await getStats();
    const {data} = res;

    const num_x_slices = 10;
    let x_data = data[x];
    const x_axis = [];
    x_data = x_data.map((e) => e / divide_x_by);
    if (log_scale) {
        const base = 2;
        let i = 0;
        while (true) {
            x_axis.push((base ** i).toPrecision(4));
            if (x_data / (base ** i) <= 0) {
                break;
            }

            i++;
        }
    } else {
        for (let i = 0; i < num_x_slices; i++) {
            x_axis.push((x_data / num_x_slices) * i);
        }
    }

    res = await getAllStats();
    const all_data = res.data;
    const y_axis = all_data.map(e => e[y]);

    const lineData = {
        labels: x_axis,
        datasets: [{
            label: x + " / " + y,
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

// Graph for cases_total / time
cases_time.addEventListener("click", () => {
    drawGraph("run_time", "cases_total", false, 1000);
});
cases_time_log.addEventListener("click", () => {
    drawGraph("run_time", "cases_total", true, 1000);
});

// Graph for coverage / time
coverage_time.addEventListener("click", () => {
    drawGraph("run_time", "coverage", false, 1000);
});
coverage_time_log.addEventListener("click", () => {
    drawGraph("run_time", "coverage", true, 1000);
});

// Graph for coverage / total_cases
coverage_total.addEventListener("click", () => {
    drawGraph("cases_total", "coverage", false, 1);
});
coverage_total_log.addEventListener("click", () => {
    drawGraph("cases_total", "coverage", true, 1);
});

// Graph for unique crashes / time
crashu_time.addEventListener("click", () => {
    drawGraph("run_time", "crash_unique", false, 1000);
});
crashu_time_log.addEventListener("click", () => {
    drawGraph("run_time", "crash_unique", true, 1000);
});

// Graph for unique crashes / total_cases
crashu_total.addEventListener("click", () => {
    drawGraph("cases_total", "crash_unique", false, 1);
});
crashu_total_log.addEventListener("click", () => {
    drawGraph("cases_total", "crash_unique", true, 1);
});
