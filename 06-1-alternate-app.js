
const name=require('./04-module');
const SayHi=require('./05-utils');

// console.log(name);

SayHi(name.rahul);
SayHi(name.varsha);     

// 06-alternate-module-export working here

const data=require('./06-alternate-module-export');
console.log(data);
SayHi(data.Person.name);

