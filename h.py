[1, 2, 3, 4, 5]


result = []
for i in range(1, 6):
    result.append(i*2) 

result = [i for i in range(1, 6)]
2 4 6 8 10

result = [i*2 for i in range(1, 6)]



s="adfweaf" => ["a", "d", "f", 

result = [s[i] for i in range(len(s)]


result = [char for char in s if char == "a" or char == "b" else "only a and b supported"]
