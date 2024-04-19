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
