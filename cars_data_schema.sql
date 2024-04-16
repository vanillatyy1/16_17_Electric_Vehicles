-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "cars_data" (
    "ID" SERIAL   NOT NULL,
    "Brand" VARCHAR   NOT NULL,
    "Model" VARCHAR   NOT NULL,
    "Battery" float   NOT NULL,
    "€/km_of_range" int   NOT NULL,
    "0-100" float   NOT NULL,
    "Top_Speed" int   NOT NULL,
    "Range" int   NOT NULL,
    "Efficiency" int   NOT NULL,
    "Fastcharge" int   NOT NULL,
    "Price_in_Germany_before_incentives" float   NOT NULL,
    "Price_in_The_Netherlands_before_incentives" float   NOT NULL,
    "Price_in_the_United_Kingdom_after_incentives" float   NOT NULL,
    "Approx._in_USD_based_on_source" float   NOT NULL,
    "Drive_Configuration" VARCHAR   NOT NULL,
    CONSTRAINT "pk_cars_data" PRIMARY KEY (
        "ID"
     )
);

