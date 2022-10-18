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
console.log("chLine parent element width is: ", covg.parentElement.clientWidth);
if (covg) {
    // eslint-disable-next-line no-new, no-undef
    new Chart(chLine, {
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
