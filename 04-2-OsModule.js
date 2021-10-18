// in-build module
const os=require('os')

// get info about current user
const user=os.userInfo();
console.log(user);

// method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// get more info of Operating System details
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);