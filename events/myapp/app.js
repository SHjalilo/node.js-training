let event = require('events');
let myEventEmiter = new event.EventEmitter();

var myHandler1 = function () {
    console.log('Uploading ...');
}

myEventEmiter.on('upload',myHandler1);

myEventEmiter.on('done', function () {
    console.log('Done!');
});

myEventEmiter.emit('upload');

myEventEmiter.emit('done');
