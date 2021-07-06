var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text 2!!!', function (err) {
    if (err) throw err;
    console.log('Updated!!!');
});