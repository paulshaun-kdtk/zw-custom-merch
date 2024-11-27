import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class SourcesPieChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Customer Sources",
      },
      subtitles: [
        {
          text: "This chart shows which give you the most customer traffic",
        },
      ],

      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}",
          startAngle: 90,
          dataPoints: [
            { y: 50, label: "Facebook Market" },
            { y: 100, label: "Facebook Page" },
            { y: 120, label: "Instagram" },
            { y: 14, label: "Whatsapp" },
            { y: 90, label: "Web" },
            { y: 12, label: "Manual" },
            { y: 10, label: "Other" },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export class NewCustomersLineChart extends Component {
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "Number of New Customers",
      },
      subtitles: [
        {
          text: "This chart is an overview of your annual customer trends",
        },
      ],
      axisY: {
        title: "Number of Customers",
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "spline",
          name: "2016",
          showInLegend: true,
          dataPoints: [
            { y: 155, label: "Jan" },
            { y: 150, label: "Feb" },
            { y: 152, label: "Mar" },
            { y: 148, label: "Apr" },
            { y: 142, label: "May" },
            { y: 150, label: "Jun" },
            { y: 146, label: "Jul" },
            { y: 149, label: "Aug" },
            { y: 153, label: "Sept" },
            { y: 158, label: "Oct" },
            { y: 154, label: "Nov" },
            { y: 150, label: "Dec" },
          ],
        },
        {
          type: "spline",
          name: "2017",
          showInLegend: true,
          dataPoints: [
            { y: 172, label: "Jan" },
            { y: 173, label: "Feb" },
            { y: 175, label: "Mar" },
            { y: 172, label: "Apr" },
            { y: 162, label: "May" },
            { y: 165, label: "Jun" },
            { y: 172, label: "Jul" },
            { y: 168, label: "Aug" },
            { y: 175, label: "Sept" },
            { y: 170, label: "Oct" },
            { y: 165, label: "Nov" },
            { y: 169, label: "Dec" },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export class UnitsSoldVsProfitLineChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const options = {
      theme: "dark2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Units Sold VS Profit",
      },
      subtitles: [
        {
          text: "This chart shows you according to the volumes you sell how much profit you are making over a certain period",
        },
      ],
      axisX: {
        title: "States",
      },
      axisY: {
        title: "Units Sold",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",
      },
      axisY2: {
        title: "Profit in USD",
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "spline",
          name: "Units Sold",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(new Date().getFullYear(), 0, 1), y: 120 },
            { x: new Date(new Date().getFullYear(), 1, 1), y: 135 },
            { x: new Date(new Date().getFullYear(), 2, 1), y: 144 },
            { x: new Date(new Date().getFullYear(), 3, 1), y: 103 },
            { x: new Date(new Date().getFullYear(), 4, 1), y: 93 },
            { x: new Date(new Date().getFullYear(), 5, 1), y: 129 },
            { x: new Date(new Date().getFullYear(), 6, 1), y: 143 },
            { x: new Date(new Date().getFullYear(), 7, 1), y: 156 },
            { x: new Date(new Date().getFullYear(), 8, 1), y: 122 },
            { x: new Date(new Date().getFullYear(), 9, 1), y: 106 },
            { x: new Date(new Date().getFullYear(), 10, 1), y: 137 },
            { x: new Date(new Date().getFullYear(), 11, 1), y: 142 },
          ],
        },
        {
          type: "spline",
          name: "Profit",
          axisYType: "secondary",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "$#,##0.#",
          dataPoints: [
            { x: new Date(new Date().getFullYear(), 0, 1), y: 19034.5 },
            { x: new Date(new Date().getFullYear(), 1, 1), y: 20015 },
            { x: new Date(new Date().getFullYear(), 2, 1), y: 27342 },
            { x: new Date(new Date().getFullYear(), 3, 1), y: 20088 },
            { x: new Date(new Date().getFullYear(), 4, 1), y: 20234 },
            { x: new Date(new Date().getFullYear(), 5, 1), y: 29034 },
            { x: new Date(new Date().getFullYear(), 6, 1), y: 30487 },
            { x: new Date(new Date().getFullYear(), 7, 1), y: 32523 },
            { x: new Date(new Date().getFullYear(), 8, 1), y: 20234 },
            { x: new Date(new Date().getFullYear(), 9, 1), y: 27234 },
            { x: new Date(new Date().getFullYear(), 10, 1), y: 33548 },
            { x: new Date(new Date().getFullYear(), 11, 1), y: 32534 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}
