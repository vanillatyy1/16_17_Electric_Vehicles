# Project 3 - Electric Vehicle

Please refer to the main branch for full group project coverage.
Variation in subbranch "vanilla" from main:
- Retained simplied workflow withoug Amazon AWS
- Plotly.js to render 1) a scatter plot for Battery Efficiency v.s. Range and 2) a bar graph for Brand Comparison for Range and Efficiency

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
