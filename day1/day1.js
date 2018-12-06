const fs = require('fs');

function getNumbers() {
    var data = fs.readFileSync('input.txt', 'utf-8');
    var numbers = data.split('\r\n').map(Number);
    console.log(numbers);
    return numbers;
}

function part1() {
    var numbers = getNumbers();
    var result = 0;
    for (i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    console.log(result)
}

function part2() {
    var numbers = getNumbers();
    var result = 0;
    var resultSet = new Set();
    resultSet.add(0);
    var i = 0;
    while(true) {
        result = result + numbers[i];
        if(resultSet.has(result)) {
            console.log('yeah rsult:' + result)
            break;
        }
        resultSet.add(result);
        i++;
        if(i == numbers.length) {
            i = 0;
        }
    }
}

part1();
part2();