const leading_employers = document.getElementById('leadingEmployers');
const common_titles = document.getElementById('commonJobTitles');
const jobs_adverts_per_month = document.getElementById('jobsPerMonth');
const law_trend  = document.getElementById('law');
const business_trend  = document.getElementById('businessHospitality');
const geoscience_trend  = document.getElementById('geoscience');
const engineering_trend  = document.getElementById('engineering');
const architecture_trend  = document.getElementById('architecture');
const computing_trend  = document.getElementById('computing-and-it');
const agribusiness_trend  = document.getElementById('agribusiness');
const sciences_trend = document.getElementById('science');
const acturial_trend  = document.getElementById('acturial');
const medicine_trend  = document.getElementById('medicine');
const education_trend  = document.getElementById('education');


new Chart(law_trend, {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023'],
    datasets: [{
      label: 'Law Trend over the years',
      data: [5, 72, 108],
      borderWidth: 1,
      backgroundColor: [
        'rgba(79, 178, 176, 1)',
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



new Chart(business_trend, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021',
        data: [0, 3, 1, 2, 0, 2, 1, 3, 7, 5, 8, 1],
        borderWidth: 1
      },
      {
        label: '2022',
        data: [2, 9, 7, 5, 1, 8, 11, 11, 9, 8, 472, 1033],
        borderWidth: 1
      },
      {
        label: '2023',
        data: [1308, 1084, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        type: 'logarithmic',
        min: 1,
        max: 10000,
        ticks: {
          callback: function (value, index, values) {
            return Number(value.toString()); // display numbers in scientific notation
          }
        }
      }
    }
  }

});
new Chart(geoscience_trend, {
  type: 'bar',
  data: {
    labels: ['2022', '2023'
    ],
    datasets: [{
      label: 'Geoscience trend',
      data: [94, 158],
      borderWidth: 1,
      backgroundColor: [
        'rgba(79, 178, 176, 1)',
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(medicine_trend, {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023'
    ],
    datasets: [{
      label: 'Medicine trend',
      data: [28, 276, 517],
      borderWidth: 1,
      backgroundColor: [
        'rgba(79, 178, 176, 1)',
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(sciences_trend, {
  type: 'bar',
  data: {
    labels: ['2022', '2023'
    ],
    datasets: [{
      label: 'Sciences trend',
      data: [32, 61],
      borderWidth: 1,
      backgroundColor: [
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(acturial_trend, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021',
        data: [2, 2, 1, 2, 2, 0, 0, 1, 1, 0, 0, 0],
        borderWidth: 1
      },
      {
        label: '2022',
        data: [1, 5, 0, 2, 1, 3, 3, 3, 3, 2, 106, 242],
        borderWidth: 1
      },
      {
        label: '2023',
        data: [345, 294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        type: 'logarithmic',
        min: 1,
        max: 10000,
        ticks: {
          callback: function (value, index, values) {
            return Number(value.toString()); // display numbers in scientific notation
          }
        }
      }
    }
  }

});

new Chart(education_trend, {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023'
    ],
    datasets: [{
      label: 'Education Trend',
      data: [10, 131, 220],
      borderWidth: 1,
      backgroundColor: [
        'rgba(79, 178, 176, 1)',
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(computing_trend, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2021',
        data: [25, 29, 26, 30, 31, 20, 1, 2, 5, 5, 7, 3],
        borderWidth: 1
      },
      {
        label: '2022',
        data: [8, 9, 10, 8, 6, 6, 14, 13, 11, 5, 560, 1153],
        borderWidth: 1
      },
      {
        label: '2023',
        data: [1308, 1301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        type: 'logarithmic',
        min: 1,
        max: 10000,
        ticks: {
          callback: function (value, index, values) {
            return Number(value.toString()); // display numbers in scientific notation
          }
        }
      }
    }
  }

});

new Chart(architecture_trend, {
  type: 'bar',
  data: {
    labels: ['2022', '2023'
    ],
    datasets: [{
      label: 'Architecture trend',
      data: [56, 144],
      borderWidth: 1,
      backgroundColor: [
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(engineering_trend, {
  type: 'bar',
  data: {
    labels: ['2022', '2023'
    ],
    datasets: [{
      label: 'Engeneering trend',
      data: [86, 104],
      borderWidth: 1,
      backgroundColor: [
        'rgba(79, 178, 176, 1)',
        'rgba(40, 104, 133, 1)', 
        'rgba(36, 36, 62, 1)', 
      ]
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


new Chart(leading_employers, {
  type: 'pie',
  data: {
    labels: ['Summit Recruitment and Search', 'Equity Afia Medical Centre – KISERIAN', 'Corporate Staffing',
      'Frank Management Consult Ltd', 'Flexi-Personnel'
    ],
    datasets: [{
      label: 'Jobs advertised',
      data: [132, 110, 107, 90, 78],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(common_titles, {
  type: 'bar',
  data: {
    labels: ['Manager', 'Senior Manager', 'Director',
      'Monitoring', 'Officer'
    ],
    datasets: [{
      label: 'Job Titles',
      data: [55, 36, 30, 25, 15],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(jobs_adverts_per_month, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: '2020',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 29, 29],
        borderWidth: 1
      },
      {
        label: '2021',
        data: [22, 33, 28, 29, 31, 22, 7, 14, 16, 9, 12, 9],
        borderWidth: 1
      },
      {
        label: '2022',
        data: [16, 25, 25, 20, 8, 17, 17, 30, 30, 8, 956, 1966],
        borderWidth: 1
      },
      {
        label: '2023',
        data: [2436, 2257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        type: 'logarithmic',
        min: 1,
        max: 10000,
        ticks: {
          callback: function (value, index, values) {
            return Number(value.toString()); // display numbers in scientific notation
          }
        }
      }
    }
  }

});
