// const http = require('http')

// http.createServer((req,res) => {
//     res.write('This is http server')
//     res.end()
// }).listen(3004 , () => {
//     console.log('server is live in port 3004')
// })

// http.createServer((req,res) => {
//     if(req.url == '/home'){
//         res.write('This is home page')
//         res.end()
//     }
//     else if(req.url == '/about'){
//         res.write('This is about page')
//         res.end()
//     }
// }).listen(3004, () => console.log('server is live in port 3004'))

// const express = require('express')
// const app =express()

// app.use('/home' , (req, res) => {
//     res.send('This is Home Page')
// })
// app.use('/about' , (req,res) => {
//     res.send('This is about page')
// })
// app.listen(3004, () => {
//     console.log('server is live in port 3004')
// })

