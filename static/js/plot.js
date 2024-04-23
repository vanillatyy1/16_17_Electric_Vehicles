fetch('/average_range_for_each_brand')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        console.log('Fetched data:', data); // Log the fetched data here

        // Parse the JSON string into a JavaScript object
        data = JSON.parse(data);

        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid data format');
        }

        // Create a Set to store unique brand names
        const uniqueBrands = new Set();

        // Iterate over the data to extract unique brand names
        data.forEach(entry => {
            uniqueBrands.add(entry.Brand);
        });

        // Convert the Set to an array
        const uniqueBrandArray = Array.from(uniqueBrands);

        // Select the dropdown menu from the HTML file
        let dropDownMenu = d3.select('#selDataset');

        // Clear existing options from the dropdown menu
        dropDownMenu.selectAll("option").remove();

        // Append unique brand names to the dropdown menu
        uniqueBrandArray.forEach(brand => {
            dropDownMenu.append("option").text(brand).property("value", brand);
        });

        console.log('Dropdown menu updated with unique brand names:', dropDownMenu.html());

        // create a listen event for dropdown menu change
        dropDownMenu.on("change", function () {
            let sample = d3.select(this).property("value")
            brand_chart(sample)
        });


        // Initializing the first page with the first values
        let firstSample = uniqueBrandArray[0];
        brand_chart(firstSample);
        // buildBubble(firstSample);
        // demographic(firstSample);

    })
    .catch(error => {
        console.error('Error fetching or processing data:', error);
    });

// Define the brand_chart function
function brand_chart(selectedBrand) {
    // Fetch data from the server
    fetch('/average_range_for_each_brand')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(serverData => {
            // Parse the JSON string into a JavaScript object
            const data = JSON.parse(serverData);

            // Filter the data based on the selected brand
            const filteredData = data.filter(entry => entry.Brand === selectedBrand);

            if (filteredData.length === 0) {
                console.log('No data found for the selected brand.');
                return;
            }

            // Extract models and ranges for the selected brand
            const models = filteredData.map(entry => entry.Model);
            const ranges = filteredData.map(entry => entry.Range);

            // Log the extracted models and ranges
            console.log('Models:', models);
            console.log('Ranges:', ranges);

            // create the chart trace to plot it
            let bar_chart = [{
                x: ranges,
                y: models,
                // text: otu_labels.slice(0, 10).reverse(),
                type: 'bar',
                orientation: 'h',
            }]
            // create a layout for the bar chart
            let bar_layout = {
                title: 'Model ranges for ' + selectedBrand + ' Brand',
                height: 400,
                plot_bgcolor: "#f5cb7d",
                paper_bgcolor: "#f5cb7d",
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#black'
                },
                yaxis: {

                    automargin: true
                },
            }
            // Plot the bar chart
            Plotly.newPlot('bar3', bar_chart, bar_layout)
            // Proceed with further processing if needed
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
        });
}
function optionChanged(selectedValue) {
    // console.log('Selected value:', selectedValue);
    // You can perform other actions here based on the selected value
}

// Define the menuChange function
function menuChange(selectedValue) {
    // Add your code here to handle the change event
    console.log('Selected value:', selectedValue);
    // You can perform any actions you want based on the selected value
}

// Other two charts here
//bar1 - Range and Efficiency comparison for each brand
fetch('/battery_efficiency_vs_range')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(brandComparisonData => {
        console.log('Fetched data:', brandComparisonData); // Log the fetched data here
        // Parse the JSON string into a JavaScript object
        const brandrangeData = JSON.parse(brandComparisonData);


        // Create a Set to store unique brand names
        //const uniqueBrands = new Set();
        // Iterate over the data to extract unique brand names
        //data.forEach(entry => {
        //  uniqueBrands.add(entry.Brand);
        // Convert the Set to an array
        //const uniqueBrandArray = Array.from(uniqueBrands);

        // Extract models and ranges for the selected brand
        const brandsData = brandrangeData.map(entry => entry.Brand);
        const rangesData = brandrangeData.map(entry => entry.Range);
        const efficiencyData = brandrangeData.map(entry => entry.Efficiency)
        // Log the extracted models and ranges
        console.log('brands:', brandsData);
        console.log('Ranges:', rangesData);
        console.log('Ranges:', efficiencyData);
        //Create bar chart
        //Create a layout for the bar chart
        let barLayout = {
            title: 'Brand comparison for Range and Efficiency',
            xaxis: {
                title: 'Brand',
                showticklabels: true,
                tickangle: -90,
                tickfont: {
                    family: 'Old Standard TT, serif',
                    size: 14,
                    color: 'black'
                },
            },
            plot_bgcolor: "#f5cb7d",
            paper_bgcolor: "#f5cb7d",
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#black'
            },
            yaxis: {
                title: 'Values',
                automargin: true
            },
            autosize: true,
            barmode: 'group',
            bargap: 0.15,
        };

        //Create chart trace to plot

        let trace1 = {
            x: brandsData,
            y: rangesData,
            type: "bar",
            name: "Range (Km)"
        };
        let trace2 = {
            x: brandsData,
            y: efficiencyData,
            type: "bar",
            name: "Efficiency (Wh/Km)"
        };
        // Data trace array
        let barData = [trace1, trace2];
        // Plot the bar chart
        Plotly.newPlot('bar1', barData, barLayout)
    })
    // proceed with further processing if needed
    .catch(error => {
        console.error('Error fetching or processing data:', error);
    })
//bar2 - Top 10 Evs with maximum usable battery
fetch('/brand_comparison')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(batterysize => {
        console.log('Fetched data:', batterysize); // Log the fetched data here
        // Parse the JSON string into a JavaScript object
        const sortedData = JSON.parse(batterysize);
        let sortedByBattery = sortedData.sort((a, b) => b.Battery - a.Battery);

        // Slice the first 10 objects for plotting
        let slicedData = sortedByBattery.slice(0, 10);

        // Reverse the array to accommodate Plotly's defaults
        slicedData.reverse();

        // Trace1 for the Data
        let trace1 = {
            x: slicedData.map(object => object.Battery),
            y: slicedData.map(object => object.Model),
            text: slicedData.map(object => object.Brand),
            name: "Battery capacity",
            type: "bar",
            orientation: "h"
        };
        // Data array
        let data = [trace1];

        // Apply a title to the layout
        let layout = {
            title: "EVs with maximum usable battery capacity - Top 10",
            // autosize: true,
            // automargin: true,
            yaxis: {

                automargin: true
            },
            plot_bgcolor: "#f5cb7d",
            paper_bgcolor: "#f5cb7d",
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#black'
            }
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bar2", data, layout);
    })








