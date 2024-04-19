from flask import Flask, jsonify, render_template
import pandas as pd
from sqlalchemy import create_engine

# Create Flask app
app = Flask(__name__)

# Create engine
engine = create_engine("postgresql://postgres:postgres@localhost:5432/cars_data")

# Route to get battery efficiency vs range data
@app.route('/battery_efficiency_vs_range')
def battery_efficiency_vs_range():
    # Query data from Postgres
    df = pd.read_sql_query("SELECT Battery, Range FROM public.cars_data", engine)
    # Convert data to JSON
    data_json = df[['Battery', 'Range']].to_json(orient='records')
    return jsonify(data_json)

# Route to get brand comparison data
@app.route('/brand_comparison')
def brand_comparison():
    # Query data from Postgres
    df = pd.read_sql_query("SELECT * FROM public.cars_data", engine)
    # Calculate average range and efficiency per brand
    grouped_data = df.groupby('Brand')[['Range', 'Efficiency']].mean().reset_index()
    # Convert data to JSON
    data_json = grouped_data.to_json(orient='records')
    return jsonify(data_json)

# Route to get average range for each brand
@app.route('/average_range_for_each_brand')
def average_range_for_each_brand():
    # Query data from Postgres
    df = pd.read_sql_query("SELECT * FROM public.cars_data", engine)
    # Calculate average range per brand
    avg_range_per_brand = df.groupby('Brand')['Range'].mean().reset_index()
    # Convert data to JSON
    data_json = avg_range_per_brand.to_json(orient='records')
    return jsonify(data_json)

# Route to render HTML page with visualizations
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)