const CHART1 = document.getElementById("lineChart1");
const CHART2 = document.getElementById("lineChart2");
const CHART3 = document.getElementById("lineChart3");
const CHART4 = document.getElementById("lineChart4");
const CHART5 = document.getElementById("lineChart5");

//grafica 1

let lineChart1 = new Chart(CHART1, {
  type: 'line',



  data: {


    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'],
    datasets: [{
      label: 'Ranking',

      data: [-4, -1, -2, -2, -1, -3],

      backgroundColor: '#fff',
      borderColor: '#fff',
      fill: false,
    }]
  },
  options: {



    legend: {
      labels: {
        fontColor: 'black',
      }
    },

    responsive: true,

    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        display: true,
        stacked: true,
        ticks: {
          fontColor: 'black',
          min: -4, // minimum value
          max: -1 // maximum value
        }
      }],

      xAxes: [{
        ticks: {
          display: false,
          fontColor: 'black',

        }
      }]
    },


  }

});

//grafica 2

let lineChart2 = new Chart(CHART2, {
  type: 'line',
  FontColor: 'white',
  data: {

    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'],
    datasets: [{
      label: 'Dinero',

      data: [300, 800, 400, 1200, 700],

      backgroundColor: 'rgb(46, 238, 28)',
      borderColor: 'rgb(46, 238, 28)',
      fill: false,
    }]
  },
  options: {



    legend: {
      labels: {
        fontColor: 'white',
      }
    },

    responsive: true,

    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        display: true,
        stacked: true,
        ticks: {
          fontColor: 'white',
          
        }
      }],

      xAxes: [{
        display: false,
        ticks: {
          fontColor: 'white',

        }
      }]
    },


  }


});

//grafica3

let lineChart3 = new Chart(CHART3, {
  type: 'line',
  FontColor: 'white',
  data: {
    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'],
    datasets: [{
      label: 'Altamar',
      backgroundColor:  'rgba(255, 206, 86)',
      borderColor:  'rgba(255, 206, 86)',
      data: [ 100, 130, 139, 180, 80 ],
      fill: false,
    }, {
      label: 'Costa',
      fill: false,
      backgroundColor:  'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      data: [ 70, 60, 75, 0, 60   ],
    }]
  },
  options: {



    legend: {
      labels: {
        fontColor: 'white',
      }
    },

    responsive: true,

    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        display: true,
        stacked: true,
        ticks: {
          fontColor: 'white',
          
        }
      }],

      xAxes: [{
        ticks: {
          fontColor: 'white',

        }
      }]
    },


  }

});

//grafica4

let lineChart4 = new Chart(CHART4, {
  type: 'line',
  FontColor: 'white',
  data: {
    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'],
    datasets: [{
      label: 'Altamar',
      backgroundColor:  'rgba(255, 206, 86)',
      borderColor:  'rgba(255, 206, 86)',
      data: [ 3, 5, 4, 6, 7 ],
      fill: false,
    }, {
      label: 'costa',
      fill: false,
      backgroundColor:  'rgba(255, 99, 132, 1)',
      borderColor:  'rgb(255, 137, 59)',
      data: [ 0, 1, 2, 1, 0   ],
    },
    {
      label: 'puerto',
      fill: false,
      backgroundColor:  ' rgb(23, 253, 100)',
      borderColor:  ' rgb(23, 253, 100)',
      data: [ 0, 0, 0, 0, 0, 0  ],
    }]

    
  }, 
  options: {



    legend: {
      labels: {
        fontColor: 'white',
      }
    },

    responsive: true,

    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        display: true,
        stacked: true,
        ticks: {
          fontColor: 'white',
          
        }
      }],

      xAxes: [{
        ticks: {
          fontColor: 'white',

        }
      }]
    },


  }

});

//grafica 5

let lineChart5 = new Chart(CHART5, {
  type: 'line',
  FontColor: 'white',
  data: {
    labels: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10'],
    datasets: [{
      label: 'Subasta abierta',
      backgroundColor:  'rgb(59, 248, 255)',
      borderColor:  'rgb(59, 248, 255)',
      data: [ 0, 0, 200, 400, 0 ],
      fill: false,
    }, {
      label: 'Subasta cerrada',
      fill: false,
      backgroundColor:  'rgb(255, 137, 59)',
      borderColor:  'rgb(255, 137, 59)',
      data: [ 0, 300, 0, 0, 0   ],
    }]
  },
  options: {



    legend: {
      labels: {
        fontColor: 'white',
      }
    },

    responsive: true,

    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        display: true,
        stacked: true,
        ticks: {
          fontColor: 'white',
          
        }
      }],

      xAxes: [{
        ticks: {
          fontColor: 'white',

        }
      }]
    },


  }

});
