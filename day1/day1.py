#Open file
file = open("input.txt", "r")
data = file.read()
#Transform data to String
dataString = str(data)
dataArray = dataString.split("\n")
numbers = [ int(x) for x in dataArray ]
#Loop through numbers Array
result = 0
i = 0
for i in range(len(numbers)):
    result = result + numbers[i]
    print(result)
