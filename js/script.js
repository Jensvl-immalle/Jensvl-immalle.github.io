Chart.defaults.global.legend.display= false;

window.onload = function () {
var ctx = document.getElementById("web");
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["HTML5", "CSS3", "JavaScript", "SQL", "jQuery (ui)"],
        datasets: [{
            label: "Kennis op 10",
            data: [8, 9, 7, 5, 6],
            backgroundColor: ["#3793cf", "#e06d5c","#354458","#29aba4", "#ef89f7"]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 10
                }
            }]
        }
    }
});
}