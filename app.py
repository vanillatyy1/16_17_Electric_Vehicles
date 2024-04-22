# Import the dependencies.
import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, text, func
from flask import Flask, jsonify

#################################################
# Database Setup
#################################################

engine = create_engine("postgressql://postgres:1234@localhost:5432/cars_data_db")

#Execute the query
with engine.connect() as connection:
    # Query all the data from the table
    result = connection.execute(text('SELECT * FROM public.cars_data'))
    
    # Fetch all rows
    rows = result.fetchall()

    # Print the rows
    for row in rows:
        print(row)  

# reflect an existing database into a new model 
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine)

# Create our session (link) from Python to the DB
session = Session(engine)

