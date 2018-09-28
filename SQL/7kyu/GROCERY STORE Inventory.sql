-- https://www.codewars.com/kata/grocery-store-inventory/train/sql

SELECT id, name, stock FROM products
WHERE stock <= 2 AND producent LIKE ''
ORDER BY id;