document.addEventListener('DOMContentLoaded', function () {
  // Fetch data for Battery Efficiency vs Range
  fetch('/battery_efficiency_vs_range')
      .then(response => response.json())
      .then(data => {
          // Extract Battery and Range data
          const batteryData = data.map(entry => entry.Battery);
          const rangeData = data.map(entry => entry.Range);

          // Create a scatter plot using Plotly.js
          const batteryEfficiencyLayout = {
              title: 'Battery Efficiency vs Range',
              xaxis: {
                  title: 'Battery Efficiency'
              },
              yaxis: {
                  title: 'Range (km)'
              }
          };

          const batteryEfficiencyData = [{
              x: batteryData,
              y: rangeData,
              mode: 'markers',
              type: 'scatter'
          }];

          Plotly.newPlot('battery-efficiency-chart', batteryEfficiencyData, batteryEfficiencyLayout);
      });

  // Fetch data for Brand Comparison for Range and Efficiency
  fetch('/brand_comparison')
      .then(response => response.json())
      .then(data => {
          // Extract Brand, Range, and Efficiency data
          const brandData = data.map(entry => entry.Brand);
          const rangeData = data.map(entry => entry.Range);
          const efficiencyData = data.map(entry => entry.Efficiency);

          // Create a bar chart using Plotly.js
          const brandComparisonLayout = {
              title: 'Brand Comparison for Range and Efficiency',
              xaxis: {
                  title: 'Brand'
              },
              yaxis: {
                  title: 'Value'
              }
          };

          const brandComparisonData = [{
              x: brandData,
              y: rangeData,
              name: 'Range',
              type: 'bar'
          }, {
              x: brandData,
              y: efficiencyData,
              name: 'Efficiency',
              type: 'bar'
          }];

          Plotly.newPlot('brand-comparison-chart', brandComparisonData, brandComparisonLayout);
      });

  // Fetch data for Average Range for Each Brand
  fetch('/average_range_for_each_brand')
      .then(response => response.json())
      .then(data => {
          // Extract Brand and Average Range data
          const brandData = data.map(entry => entry.Brand);
          const avgRangeData = data.map(entry => entry['Average Range']);

          // Create a bar chart using Plotly.js
          const averageRangeLayout = {
              title: 'Average Range for Each Brand',
              xaxis: {
                  title: 'Brand'
              },
              yaxis: {
                  title: 'Average Range (km)'
              }
          };

          const averageRangeData = [{
              x: brandData,
              y: avgRangeData,
              type: 'bar'
          }];

          Plotly.newPlot('average-range-chart', averageRangeData, averageRangeLayout);
      });
});