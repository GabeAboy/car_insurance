const express = require('express')
const Router = express.Router()
const { generateInsuranceConfiguration, calculatInsuranceQuote } = require('./insuranceUtility')
Router.get('/quotes', (req, res) => {
    const covers = req.body.covers
    insurerConfiguration = generateInsuranceConfiguration(covers)
    insurerQuota = calculatInsuranceQuote(insurerConfiguration)

    res.json({ message: insurerQuota })
})


module.exports = Router