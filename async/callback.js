'use strict';

//Javascript is synchronous.
//Execute the code block by order after hosting
//hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);
printImmediately(() => console.log('hello'))
