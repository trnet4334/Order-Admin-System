$(function(){

  //menu toogle
  const menuItem = $('#navbar .nav-item');
  const mainContent = $('.js_mainContent');

  menuItem.on('click', function(e){
    e.preventDefault();
    menuItem.removeClass('active');
    $(this).addClass('active');
    const target = $(this).find('a').attr('href');
    mainContent.not(target).hide().addClass('d-none');
    $(target).show().removeClass('d-none');
  });

  //c3 chart
  const chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x', '18 JUN', '19 JUN', '20 JUN', '21 JUN', '22 JUN', '23 JUN'],
        ['TOTAL REVENUE', 5000, 2000, 3000, 4500, 6000, 8000],
        ['TOTAL COST', 500, 800, 1200, 1500, 750, 800],
        ['NET INCOME', 4500, 1200, 1800, 3000, 5250, 7200]
      ]
    },
    color: {
      pattern: ['#7ED321', '#D0021B', '#4A90E2']
    },
    axis: {
      x: {
          type: 'category',
      }
    },
    legend: {
      show: false
    },
    grid: {
      y: {
          show: true
      }
    },
    tooltip: {
      grouped: false,
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        if(d[0].id === 'TOTAL REVENUE'){
          return `<div class="tip_revenue"><i class="fas fa-hand-holding-usd mr-2"></i>${d[0].value}</div>`;
        } else if(d[0].id === 'TOTAL COST'){
          return `<div class="tip_cost"><i class="fas fa-boxes mr-2"></i>${d[0].value}</div>`;
        } else{
          return `<div class="tip_income"><i class="fas fa-money-bill mr-2"></i>${d[0].value}</div>`;
        }
      }
    }
  });
});