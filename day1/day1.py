file = open("input.txt", "r")
data = file.read()
file.close()
numbers = [ int(x) for x in data.split("\n") ]
result = 0
for number in numbers:
    result = result + number
    print(result)