

var myData = [
  { name: 'T1', value: 10 },
  { name: 'T2', value: 4 },
  { name: 'T3', value: 8 },
  { name: 'T4', value: 9 },
  { name: 'T12', value: 10 },
]


Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Desempenho'
  },
  xAxis: {
    categories: myData.map( x => x.name),
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Notas'
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'My Data',
    data: myData.map( x => x.value )
  }]
});

pieData = [
  { name: 'Atividades', y: 30 },
  { name: 'Tarefas', y: 50 },
  { name: 'Estudo', y: 10 },
  { name: 'Tempo livre', y: 10 },
]

Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Desempenho'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: pieData
  }]
});