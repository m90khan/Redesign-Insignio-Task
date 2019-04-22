Highcharts.chart('container', {

    chart: {
        styledMode: true
    },

    title: {
        text: 'Nettoerhöhung'
    },

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['12/31/2017 <br> 868.3€ million ', 868.3, false],
            ['12/31/2016 <br> 562.6€ million', 562.6, false],
            ['Anstieg von 54.34%', 305.7, false]

        ],
        showInLegend: true
    }]
});
 // /* Imports */
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
//
// /* Chart code */
// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end
//
//
//
// // Create chart instance
// let chart = am4core.create("chartdiv", am4charts.RadarChart);
//
// // Add data
// chart.data = [{
//
//  "category": "31.12.2016",
//  "value": 562.6,
//  "full": 1000
// }, {
//  "category": "31.12.2017",
//  "value": 868.3,
//  "full": 1000
// }];
//
// // Make chart not full circle
// chart.startAngle = -90;
// chart.endAngle = 180;
// chart.innerRadius = am4core.percent(20);
//
// // Set number format
// chart.numberFormatter.numberFormat = "#.#'Mio. €'";
//
// // Create axes
// let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "category";
// categoryAxis.renderer.grid.template.location = 0;
// categoryAxis.renderer.grid.template.strokeOpacity = 0;
// categoryAxis.renderer.labels.template.horizontalCenter = "right";
// categoryAxis.renderer.labels.template.fontWeight = 500;
// categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
//   return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
// });
// categoryAxis.renderer.minGridDistance = 10;
//
// let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
// valueAxis.renderer.grid.template.strokeOpacity = 0;
// valueAxis.min = 0;
// valueAxis.max = 100;
// valueAxis.strictMinMax = true;
//
// // Create series
// let series1 = chart.series.push(new am4charts.RadarColumnSeries());
// series1.dataFields.valueX = "full";
// series1.dataFields.categoryY = "category";
// series1.clustered = false;
// series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
// series1.columns.template.fillOpacity = 0.08;
// series1.columns.template.cornerRadiusTopLeft = 20;
// series1.columns.template.strokeWidth = 0;
// series1.columns.template.radarColumn.cornerRadius = 20;
//
// let series2 = chart.series.push(new am4charts.RadarColumnSeries());
// series2.dataFields.valueX = "value";
// series2.dataFields.categoryY = "category";
// series2.clustered = false;
// series2.columns.template.strokeWidth = 0;
// series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
// series2.columns.template.radarColumn.cornerRadius = 20;
//
// series2.columns.template.adapter.add("fill", function(fill, target) {
//   return chart.colors.getIndex(target.dataItem.index);
// });
//
// // Add cursor
// chart.cursor = new am4charts.RadarCursor();
