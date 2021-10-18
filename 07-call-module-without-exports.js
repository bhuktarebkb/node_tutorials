
// Calling module without exports if we invoke the function from the same module.

const num1=100;
const num2=200;

function addNums()
{
    console.log(`Addition is ${num1+num2}`);
}

addNums();

// we are not exporting from here..

// in app.js just write a single line of require which will call addNums() function automatically.
// require('./07-call-module-without-exports');
// node app.js
// will return --> Addition is 300
