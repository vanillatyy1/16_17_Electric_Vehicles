# 16_17_Electric_Vehicles
**
You can access our data here : https://ev-database.org/**

# 1- Overview 
In the recent years, the demand for Electric Vehicles(EV) have increased many folds. Electric vehicles are not just good for enviromnet but are also cost effective and offer better driving experience. Furthermore, advancement in battery design and model have increasd the variety of electric vehilcles available to consumers.

![Electric Vehicle](https://github.com/vanillatyy1/16_17_Electric_Vehicles/raw/4d95ea0bb6804447c4ec8e22abbc238155edd02e/visuals/EV.png)

# 2- Objectives
We believe that there are numerous factors contributing to popularity of elecric vehicles, with this porject we aim to focus on:

    - Comparison of different models/brands based on their range and efficiency.

    - Top 10 Electric Vehicles based on their usable batteries

    - Creating an interactive tool for consumers to access different brand models and their range. 

We aim to present our objectives through different visualizations following the given steps.

![alt text](data_vis.png)

## Web scraping and Data Cleaning
We utilized the requests library to retrieve data from [https://ev-database.org/](https://ev-database.org/) and BeautifulSoup to parse the HTML content. The primary goal was to extract information about electric cars, including their brands, models, battery specifications, performance metrics, prices in different countries, and additional features. We then organized this data into a structured format using Pandas DataFrame. Additionally, we performed data cleaning tasks such as replacing missing values, converting currencies, and formatting columns to ensure consistency and usability. Finally, we prepared the data for further analysis or visualization by renaming columns and adjusting data types as needed.

## AWS Integration and Database Modification:
In the course of our project, we transitioned from local database management to leveraging Amazon AWS for our database needs. This shift allowed us to enhance scalability and accessibility while maintaining data integrity and security. By establishing a connection with Amazon AWS, we ensured seamless data management and efficient retrieval for our project requirements.

## JavaScript Enhancement with D3 and Plotly.js:
To enrich our data visualization capabilities, we utilized both D3.js and Plotly.js in our JavaScript code. D3.js facilitated dynamic data manipulation and DOM manipulation, enabling us to create custom interactive features and transitions for a more engaging user experience. Additionally, we leveraged Plotly.js to implement advanced charting functionalities, such as interactive dropdown menus for selecting car brands for visualizations. 

## CSS Styling Updates:
Our CSS stylesheet underwent refinement to enhance the aesthetics and user experience of our web application. We tried fine-tuning element alignments, font styles, and color schemes. 

![Visual1](https://github.com/vanillatyy1/16_17_Electric_Vehicles/blob/4d95ea0bb6804447c4ec8e22abbc238155edd02e/visuals/visual1.png)
![Visual2](https://github.com/vanillatyy1/16_17_Electric_Vehicles/blob/4d95ea0bb6804447c4ec8e22abbc238155edd02e/visuals/visual2.png)


# 3- Resource Requirement
    - Installation: Python3.x, Postges SQL
    - Technologies used: Flask, SQLAlchemy, pandas, psycopg2, HTML/CSS, D3.js, JavaScript
    - Hosting/Cloud: Amazon Web Services (AWS)
    - New library used - psycopg2
    
# 4- Steps to interact with the visualizations
    - Clone the repository using https://github.com/vanillatyy1/16_17_Electric_Vehicles
    - Install all the packages within requirements.txt and run: pip install -r requirements.txt
    - Import data into the database
    - Update the URL with your PostgresSQL username and password.
    - run application using: python app_01.py

# 5- Ethical Considerations
One of the foremost ethical consideration of this project was to safeguard the rights and well being of individuals and communities. We also focused on ensuring data privacy and confidentiality especially when dealing with sensitive personal information. By prioritizing ethical considerations throughout this project we aim to protect individual's rights and contribute positively to society's well being. 


# 6- Contributors 
[@Charu39](https://github.com/Charu39)
[@Amer4r](https://github.com/Amer4r)
[@vanillatyy1](https://github.com/vanillatyy1/)
[@abidhussainca1294](https://github.com/abidhussainca1294)
