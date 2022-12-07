// eslint warning disablers
/* eslint-disable prefer-arrow-callback */
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
let currScale = defaultScale;

async function drawGraph(x, y, log_scale) {
    const graph = document.getElementById("this_graph");
    let res = await getStats();
    const data = res.data;
    const num_x_slices = 10;
    const x_data = data[x];
    const x_axis = [];

    if (log_scale) {
        let base = 2;
        let i = 0;
        while (true) {
            x_axis.push(Math.pow(base, i).toPrecision(4));
            if (x_data / Math.pow(base, i) <= 0) {
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
cases_time.addEventListener("click", () => { drawGraph("run_time", "cases_total", false); });
cases_time_log.addEventListener("click", () => { drawGraph("run_time", "cases_total", true); });

// Graph for coverage / time
coverage_time.addEventListener("click", () => { drawGraph("run_time", "coverage", false); });
coverage_time_log.addEventListener("click", () => { drawGraph("run_time", "coverage", true); });

// Graph for coverage / total_cases
coverage_total.addEventListener("click", () => { drawGraph("cases_total", "coverage", false); });
coverage_total_log.addEventListener("click", () => { drawGraph("cases_total", "coverage", true); });

// Graph for unique crashes / time
crashu_time.addEventListener("click", () => { drawGraph("run_time", "crash_unique", false); });
crashu_time_log.addEventListener("click", () => { drawGraph("run_time", "crash_unique", true); });

// Graph for unique crashes / total_cases
crashu_total.addEventListener("click", () => { drawGraph("cases_total", "crash_unique", false); });
crashu_total_log.addEventListener("click", () => { drawGraph("cases_total", "crash_unique", true); });
