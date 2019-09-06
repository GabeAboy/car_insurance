const express = require('express')
const Router = express.Router()
const { generateInsuranceConfiguration, calculatInsuranceQuote } = require('./insuranceUtility')
Router.get('/quotes', (req, res) => {
    const covers = req.body.covers
    let insurerConfigurationQuota = generateInsuranceConfiguration(covers)
    calculatInsuranceQuote(insurerConfigurationQuota)
    res.json({ message: insurerConfigurationQuota })
})


module.exports = Router