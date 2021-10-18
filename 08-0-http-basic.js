/// HTTP INTRO (HTTP Module)
// COVER IN DETAILS
// HTTP MODULE SETUP

// import http in-build module
const http=require('http'); 

// create server
const server= http.createServer((req,res)=>{
    res.write('Welcome to my home page');
    res.end();
});

//listen to server
server.listen(5000);

// now in console it won't show any output, actually it listen to port 5000 on localhost
// open web browser and check the output with localhost:5000

