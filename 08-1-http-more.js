// HTTP MODULE WITH MORE FEATURES

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page')
    }
    else if (req.url === '/about') {
        res.end('About us - here is the our achivement & history')
    }
    else {
        res.end(`<h1>Oops</h1>
        <p> Not found the resource that you are looking here ! </p>
        <a href="/">Go to Home</a>
    `)
    }
})

server.listen(5000);