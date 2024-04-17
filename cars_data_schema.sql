-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

CREATE TABLE "cars_data" (
    "Brand" VARCHAR,
    "Model" VARCHAR,
    "Battery" float,
    "km_of_range" int,
    "0-100" float,
    "Top_Speed" int,
    "Range" int,
    "Efficiency" int,
    "Fastcharge" int,
    "Price_in_Germany_before_incentives" float,
    "Price_in_The_Netherlands_before_incentives" float,
    "Price_in_the_United_Kingdom_after_incentives" float,
    "Approx_usd" float,
    "Drive_Configuration" VARCHAR
);

SELECT * FROM public.cars_data
LIMIT 100
