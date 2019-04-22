Highcharts.chart('containerx', {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['31.12.2016', '31.12.2017']
    },
    labels: {
        items: [{
            html: 'Einlagen von Kunden',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Spareinlagen',
        data: [452.9, 172.2,5926.9]
    }, {
        type: 'column',
        name: 'Spareinlagen',
        data: [452.9, 172.2,5926.9]
    }, {
        type: 'column',
        name: 'Spareinlagen',
        data: [4, 3, 3, 9, 0]
    }, {
        type: 'spline',
        name: 'Spareinlagen',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Spareinlagen',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'Spareinlagen',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Spareinlagen',
            y: 19,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});
