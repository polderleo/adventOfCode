const fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf-8');
var dataArray = data.split('\r\n').map(Number);
var result = 0;
for(i = 0; i < dataArray.length ; i++) {
    result = result + dataArray[i];
    console.log(result)
}