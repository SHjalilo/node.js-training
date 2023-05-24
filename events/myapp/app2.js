let event = require('events');
let myEventEmiter = new event.EventEmitter();
let fs = require('fs');

fs.readFile('file.txt', function (err, data) {
    myEventEmiter.emit('open');
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
    myEventEmiter.emit('close');
});

myEventEmiter.on('open',function () {
    console.log('file open');
});

myEventEmiter.on('close',function () {
    console.log('file close');
})