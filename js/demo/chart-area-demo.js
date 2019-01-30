Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


d3.csv("data_pi.csv").then(response => {
  var x = []
  var total = 0  

  response.forEach(myFuntion)
  function myFuntion(value) {
    x.push(value.temperature)
  }

  var val = x.length
  var y = Array(val).fill("x")
  var ctx = document.getElementById("tempChart");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: y,
      datasets: [{
        label: "Temperature",
        data: x
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  })
})
.catch(response => {
})

d3.csv("data_pi.csv").then(response => {
  var x = []
  var total = 0  

  response.forEach(myFuntion)
  function myFuntion(value) {
    x.push(value.concentration)
  }

  var val = x.length
  var y = Array(val).fill("x")
  var ctx = document.getElementById("concentration");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: y,
      datasets: [{
        label: "Temperature",
        data: x
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 50,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  })
})
.catch(response => {
})


d3.csv("data_pi.csv").then(response => {
  var x = []
  var total = 0  

  response.forEach(myFuntion)
  function myFuntion(value) {
    x.push(value.pressure)
  }

  var val = x.length
  var y = Array(val).fill("x")
  var ctx = document.getElementById("pressure");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: y,
      datasets: [{
        label: "Temperature",
        data: x
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  })
})
.catch(response => {
})

d3.csv("data_pi.csv").then(response => {
  var x = []
  var total = 0  

  response.forEach(myFuntion)
  function myFuntion(value) {
    x.push(value.pH_Level)
  }

  var val = x.length
  var y = Array(val).fill("x")
  var ctx = document.getElementById("ph_level");
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: y,
      datasets: [{
        label: "Temperature",
        data: x
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 1
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 14,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  })
})
.catch(response => {
})
