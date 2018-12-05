const fs = require('fs');

var data = fs.readFileSync('input.txt');
var dataString = data.toString();
var dataArray = dataString.split('\r\n').map(Number);

var result = 0;

for(i = 0; i < dataArray.length; i++) {
    result = result + dataArray[i];
    console.log(result);
}