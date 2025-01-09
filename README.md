# E-commerce API

## Overview
This project is a simplified e-commerce API with a single `/checkout` endpoint to calculate total costs based on a product catalog. It accepts a list of product IDs and return the total price, applying discounts where applicable.

## Features
Discount Logic: Automatically applies discounts for eligible products based on the product catalog.
Validation: Ensures input is valid using Joi.
API Docummentation: Accessible Swagger documentation for ease of use.
Testing: Comprehensive unit and integration tests using Jest and Supertest. 

## How to Set Up and Run the Application

1-Clone respository:
    git clone https://github.com/junaiddevworks/ecommerceTask.git
    cd ecommerceTask

2- Install dependencies:
    npm install

3- Start the application:
    npm start

4- Access API documentation:
    http://localhost:8080/docs

5- To run the tests:
    npm test

## Approach
1- Created a productModel with the product catalog.
2- Built a discount logic function in utils/discountCalculator.js.
3- Integrated the functionality in a service layer (checkoutService).
4- Set up a controller (checkoutController) for input validation and responses.
5- Added middleware for error handling.
6- Wrote tests for both valid and invalid cases.

## Improvments
1- Support for dynamic product catalogs fetched from a database.
2- User authentication.
3- Additional Validation for edge cases.


