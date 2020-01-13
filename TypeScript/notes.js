// see what I compile to with tsc .\notes.ts
// then run node notes.js
'use strict';
exports.__esModule = true;
var message = 'I am not a message...';
console.log(message);
var getter = function () {
    console.log('Success!');
};
exports.getter = getter;
