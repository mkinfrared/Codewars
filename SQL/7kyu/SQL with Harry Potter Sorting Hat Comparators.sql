SELECT * FROM students
WHERE
		quality1 LIKE 'evil' AND quality2 LIKE 'cunning'
	OR
		quality1 LIKE 'brave' AND quality2 NOT LIKE 'evil'
	OR
		quality1 LIKE 'studious' OR quality2 LIKE 'intelligent'
	OR
		quality1 LIKE 'hufflepuff' OR quality2 LIKE 'hufflepuff';