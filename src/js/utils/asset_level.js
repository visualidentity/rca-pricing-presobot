var assetLevelEvents = function(options) {
  var {
    figure,
    figure2,
    figure3,
    figure4,
    data,
    data2,
    data3,
    data4
  } = options;

  this.init = function() {
    this.percentageGraph(data, document.getElementById(figure));
    this.percentageGraph(data2, document.getElementById(figure2));
    this.percentageGraph(data3, document.getElementById(figure3));
    this.percentageGraph(data4, document.getElementById(figure4));
  };

  this.percentageGraph = function(data, $container) {
    var barChartData = {
      labels: data.assets,
      datasets: [
        {
          type: 'horizontalBar',
          label: 'Dataset 1',
          data: data.views
        }
      ]
    };

    var backgroundColorConditionalRenderPlugin = {
      beforeUpdate: function(chart) {
        var backgroundColor = [];
        for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
          var value = chart.config.data.datasets[0].data[i];
          var color = '#055FB4';
          if (value < 0) {
            color = '#C6DAEE';
          }
          backgroundColor.push(color);
        }
        chart.config.data.datasets[0].backgroundColor = backgroundColor;
      }
    };

    var customLabelPlugin = {
      afterDraw: (chart, args, opts) => {
        const {
          ctx,
          data: { datasets }
        } = chart;

        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';

        datasets.forEach(function(dataset, i) {
          var meta = chart.controller.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            var y, x;

            ctx.fillStyle = '#716E75';
            ctx.font =
              '100 12px "REAPangea-SemiBold", Helvetica, Arial, sans-serif';
            x = bar._model.x + 15;
            y = bar._model.y - 10;

            if (data < 0) {
              ctx.fillText(data + '%', bar._model.x - 30, y);
            } else {
              ctx.fillText(data + '%', x, y);
            }
          });
        });

        var xAxis = chart.scales['x-axis-0'];
        var yAxis = chart.scales['y-axis-0'];
      }
    };

    Chart.pluginService.register(backgroundColorConditionalRenderPlugin);
    Chart.pluginService.register(customLabelPlugin);

    var ctx = $container.getContext('2d');
    window.myBar = new Chart(ctx, {
      data: barChartData,
      type: 'horizontalBar',
      options: {
        layout: {
          padding: {
            left: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              barPercentage: 0.5,
              barThickness: 40,
              ticks: {
                min: -50,
                max: 50,
                beginAtZero: true,
                stepSize: 10,
                fontSize: 13,
                fontFamily: '"REAPangea", Helvetica, Arial, sans-serif',
                fontColor: '#C4C4C4',
                fontStyle: 600,
                padding: 15,
                callback: function(value, index, ticks) {
                  return (
                    ' ' +
                    value.toFixed(0) +
                    `${value.toFixed(0) == 0 ? '' : '%'}`
                  );
                }
              },
              gridLines: {
                display: true,
                drawTicks: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 14,
                fontFamily:
                  '"REAPangea-SemiBold", Helvetica, Arial, sans-serif',
                fontStyle: 100,
                fontColor: '#ffffff'
              }
            }
          ]
        },
        plugins: {
          datalabels: {
            align: 'end',
            anchor: 'end',
            backgroundColor: function(context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: 'white',
            formatter: Math.round
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: { enabled: false },
        hover: { mode: null }
      }
    });
  };

  this.init();
};
