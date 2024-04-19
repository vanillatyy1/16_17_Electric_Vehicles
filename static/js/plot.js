fetch('/battery_efficiency_vs_range')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Parse the JSON string into a JavaScript object
        data = JSON.parse(data);
        
        // Extract Battery and Range data
        const batteryData = data.map(entry => entry.Battery);
        const rangeData = data.map(entry => entry.Range);

        // Create plot layout
        const batteryEfficiencyLayout = {
            title: 'Battery Efficiency vs Range',
            xaxis: { title: 'Battery Efficiency' },
            yaxis: { title: 'Range (km)' }
        };

        // Create plot data
        const batteryEfficiencyData = [{
            x: batteryData,
            y: rangeData,
            mode: 'markers',
            type: 'scatter'
        }];

        // Plot the data
        Plotly.newPlot('battery-efficiency-chart', batteryEfficiencyData, batteryEfficiencyLayout);
    })
    .catch(error => {
        console.error('Error fetching or processing data for Battery Efficiency vs Range:', error);
    });

// Fetch data for Brand Comparison for Range and Efficiency
fetch('/brand_comparison')
    .then(response => response.json())
    .then(data => {
        console.log('Brand Comparison data:', data);
        // Parse the JSON string into a JavaScript object
        data = JSON.parse(data);
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
    })
    .catch(error => {
        console.error('Error fetching data for Brand Comparison:', error);
    });


// Fetch data for Brand Comparison for Range and Efficiency
fetch('/brand_comparison')
    .then(response => response.json())
    .then(data => {
        console.log('Brand Comparison data:', data);
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
    })
    .catch(error => {
        console.error('Error fetching data for Brand Comparison:', error);
    });