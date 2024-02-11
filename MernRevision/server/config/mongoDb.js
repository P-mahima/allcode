
const mongoose = require('mongoose')

const connectedToDB = (url) => mongoose.connect(url)
    .then(() => console.log('Connected Mongo Db'))
    .catch((err) => console.log(err))

module.exports = connectedToDB
