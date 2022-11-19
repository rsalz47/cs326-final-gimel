// eslint warning disablers
/* eslint-disable prefer-arrow-callback */

// Various variables
// First checkbox on LHS of graph page, used to show/hide graph1
const toggle1 = document.getElementById("toggle1");

// Second checkbox on LHS of graph page, used to un/set logarithmic scale
const toggle2 = document.getElementById("toggle2");

// Left pane of webpage
// eslint-disable-next-line no-unused-vars
const leftPane = document.getElementById("view1");

// Logarithmic scale for graph drawing
const logarithmicScale = {myScale: {
    type: "logarithmic",
    position: "right"
}};

// Default scale for graph drawing
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

// Dummy data to draw graph 1, later on this will be made dynamic with database queries
const lineData = {
    labels: [0, 10, 20, 30, 40, 50],
    datasets: [{
        label: "My First Dataset",
        data: [0, 59, 80, 100, 169, 250],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5
    }]
};

// EventListeners()
// draw or delete graph1
toggle1.addEventListener("change", function () {
    const covg = document.getElementById("coverage-graph");

    // Draw a new graph
    if (toggle1.checked) {
        document.getElementById("toggle2").removeAttribute("hidden");
        document.getElementById("label-toggle2").removeAttribute("hidden");
        // eslint-disable-next-line no-undef
        chart1 = new Chart(covg, {
            type: "line",
            data: lineData,
            options: {
                scales: currScale,
                legend: {
                    display: false
                }
            }
        });
    } else {
        // This is so incredibly sloppy :)
        document.getElementById("toggle2").setAttribute("hidden"); // Sub-checkbox
        document.getElementById("label-toggle2").setAttribute("hidden"); // Sub-checkbox label

        if (chart1 !== null) {
            console.log("destroying chart");
            chart1.destroy();
            chart1 = null;
        }
    }
});

// Un/set scale to logarithmic
toggle2.addEventListener("change", function () {
    currScale = (toggle2.checked ? logarithmicScale : defaultScale);
    console.log(currScale);
});
