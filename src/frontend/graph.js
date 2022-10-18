const chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [589, 445, 483, 503, 689, 692, 634],
    },
    {
        data: [639, 465, 493, 478, 589, 632, 674],
    }]
};

const covg = document.getElementById("coverage-graph");
console.log("covg parent element width is: ", covg.parentElement.clientWidth);
if (covg) {
    // eslint-disable-next-line no-new, no-undef
    new Chart(covg, {
        type: "line",
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}

// <canvas id="coverage-graph"></canvas>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
// <script id="graph" src="src/frontend/graph.js" defer></script>
