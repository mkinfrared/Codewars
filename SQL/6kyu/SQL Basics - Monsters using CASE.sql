SELECT * FROM top_half th
JOIN bootom_half bh
	ON th.id = bh.id
CASE
	WHEN th.heads > th.arms
		OR bh.tails > bh.legs
	THEN