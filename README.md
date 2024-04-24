# Project 3 - Electric Vehicle

Please refer to the main branch for full group project coverage.
Subbranch vanilla is kept as a backup for further referencing.

Variation in subbranch "vanilla" from main:
- Retained simplied workflow withoug Amazon AWS
- Plotly.js to render 1) a scatter plot for Battery Efficiency v.s. Range and 2) a bar graph for Brand Comparison for Range and Efficiency
- Only plotly was used for rendering the visuals. D3 is not utilized. 

![Data Visualization Stream](https://github.com/vanillatyy1/16_17_Electric_Vehicles/blob/0e0e159c31cdd84a36e4c709d13a4c7609e65cd7/workflow.png)

# Process

## Web scraping and data cleaning:
The web scraping and data cleaning process aimed at gathering information about electric cars from a [https://ev-database.org/](https://ev-database.org/). By leveraging Python libraries such as requests and BeautifulSoup, the project extracted data on electric car brands, models, battery specifications, performance metrics, and pricing across different countries. The collected data was then structured into a Pandas DataFrame for further analysis and visualization.

## Flask Integration:
To enhance data accessibility and visualization, the project utilized the Flask framework to create a web application. Flask provided the infrastructure for serving data through APIs and rendering dynamic HTML templates. The integration involved setting up routes to handle incoming requests and executing queries to retrieve data from a PostgreSQL database.

## HTML Templates:
HTML templates were used to create interactive web pages for data visualization. These templates were rendered dynamically by Flask based on user requests, allowing for the presentation of charts and graphs generated using Plotly.js. These HTML templates provided a user-friendly interface for exploring and analyzing the collected data on electric vehicles.

## JavaScript (Plotly.js):
Plotly.js was employed to create interactive and visually appealing charts for data visualization. JavaScript code was utilized to fetch data from Flask API endpoints and dynamically update the charts based on user interactions. The integration of Plotly.js allowed for the creation of responsive and interactive visualizations, enabling users to gain insights into electric vehicle trends and performance metrics directly from the web application.

## Sample visual:
![Screenshot](https://github.com/vanillatyy1/16_17_Electric_Vehicles/blob/a1291458f2befb09521b7af7e8ca4b2582a2ca6d/Screenshot.png)

# Takeaway
1) Web scraping and data cleaning are essential processes for gathering and preparing data from online sources for analysis.

2) Standardizing and structuring data into a consistent format enhances its usability and facilitates meaningful analysis.


