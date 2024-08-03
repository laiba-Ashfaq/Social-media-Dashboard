
const ctx = document.getElementById('linechart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun' , 'jul' ,'aug', 'sep ', 'oct' ,'nov', 'dec'],
    datasets: [{
      label: 'Recent Followers',
      data: [12, 19, 3, 5, 2, 10 ,5 ,14 ,1, 5,18,4],
      borderWidth: 4,
      backgroundolor:'transparent',
      borderColor:'purple'
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
const ctx1 = document.getElementById('myChart');

const mychart1= new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat' , 'sun' ],
    datasets: [{
      label: 'Recent Post',
      data: [2, 1, 3, 1, 2, 1,3 ],
      borderWidth: 4,
      backgroundolor:'transparent',
      borderColor:'purple'
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
const ctx2 = document.getElementById('myChart1');

const mychart2= new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Followers', 'Website', 'contacts', 'External' ],
    datasets: [{
      label: 'Recent Post',
      data: [5, 1, 3, 1 ],
      borderWidth: 4,
      backgroundolor:'transparent',
      Color:'purple'
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
const engagement=[
    {day:'Mon',engage:{Followers:1500, Website:400 ,External:130  }},
    {day:'Tue',engage:{Followers:900, Website:100 ,External:100  }},
    {day:'Wed',engage:{Followers:800, Website:200 ,External:120  }},
    {day:'Thu',engage:{Followers:1000, Website:100 ,External:200  }},
    {day:'Fri',engage:{Followers:1300, Website:400 ,External:300  }},
    {day:'sat',engage:{Followers:700, Website:300 ,External:230  }},
    {day:'sun',engage:{Followers:500, Website:500 ,External:350  }}

]
const ctx3 = document.getElementById('myChartt');

const mychartt=new Chart(ctx3, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Recent Engagement from followers',
      data: engagement,
      borderWidth: 4,
      backgroundolor:'transparent',
      borderColor:'purple',
      tension:0.4,
      fill:true,
      parsing:{
        xAxisKey:'day',
        yAxisKey:'engage.Followers'
      }
    },{
    label: 'Recent Engagement from website',
    data: engagement,
    borderWidth: 4,
    backgroundolor:'transparent',
    borderColor:'yellow',
    tension:0.4,
    fill:true,
    parsing:{
      xAxisKey:'day',
      yAxisKey:'engage.Website'
    }
  },{
    label: 'Recent Engagement from external link',
    data: engagement,
    borderWidth: 4,
    backgroundolor:'transparent',
    borderColor:'pink',
    tension:0.4,
    fill:true,
    parsing:{
      xAxisKey:'day',
      yAxisKey:'engage.External'
    }
  },

]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx4 = document.getElementById('overviewChart');

const mychart4= new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: [
        'Onclick-impression',
        'Post-impression',
        'Profile-impression'
      ],
      datasets: [{
        label: 'Impression',
        data: [300, 50, 100],
        backgroundColor: [
          'pink',
          'purple',
          'yellow'
        ],
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