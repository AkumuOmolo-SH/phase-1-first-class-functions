
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) { 
  callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("named function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log("anonymous function");
    };   
}