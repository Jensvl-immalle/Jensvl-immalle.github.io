new Chartist.Pie('.web', {
    series: [20, 10, 30, 40]
}, {
    chartPadding: 30,
    labelOffset: 50,
    labelDirection: 'explode'
});

var desktop = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
        [5, 2, 4, 2, 0]
    ]
};

new Chartist.Line('.desktop', desktop);

var server = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
        [5, 2, 4, 2, 0]
    ]
};

new Chartist.Line('.server', server);

