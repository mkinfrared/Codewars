-- https://www.codewars.com/kata/sql-with-pokemon-damage-multipliers/train/sql

SELECT TOP 7 pokemon_name, (str*multiplier) AS modifiedStrength, element
FROM pokemon p
JOIN multipliers m
ON p.id = m.id
WHERE p.str*m.multiplier >= 40
ORDER BY modifiedStrength DESC
LIMIT 7;