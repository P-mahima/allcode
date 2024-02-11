const http = require('http')
http.createServer((req, res) => {
    res.write('This is http server')
    res.end()
}).listen(3004, () => {
    console.log('server is live in port 3004')
})