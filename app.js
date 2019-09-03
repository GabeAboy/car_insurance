// Thank you Simply Business,
// Gabriel Aboy
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const insuranceService = require('./insuranceService')

app.use(bodyParser.json())
app.use('/insurance',insuranceService)

app.listen(3000, ()=>{
    console.log('Server is running')
})