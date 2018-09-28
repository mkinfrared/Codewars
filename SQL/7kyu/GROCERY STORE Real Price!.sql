-- https://www.codewars.com/kata/grocery-store-real-price/train/sql

SELECT name, weight, price, ROUND(price / weight, 2) AS price_per_kg
FROM products;