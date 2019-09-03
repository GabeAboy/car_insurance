const express = require('express')
const Router = express.Router()

// TODO encapsolate individual logic units into descrete methods
Router.get('/get', (req, res) => {
    const covers = req.body.covers
    let objWithTopThreeCovers = {}
    for (var i = 0; i < 3; i++) {
        let keyToLocalMax
        let max = 0;
        for (const key in covers) {
            if (covers[key] >= max) {
                max = covers[key]
                keyToLocalMax = key
            }
        }
        objWithTopThreeCovers[keyToLocalMax] = covers[keyToLocalMax]
        delete covers[keyToLocalMax]
    }


    /**
     * RULES
     * 
     * The quote is 10% of the insurer rate if 2 covers are matched.
     * If only 1 cover is matched, the quote is 20% of the insurer rate 
     * else if it is the highest cover requested, 25% 
     * else if it is the second highest, or 30% if it is the third.
     * 
     * objWithTopThreeCovers
     */

    //The quote is 10% of the insurer rate if 2 covers are matched.


    //TODO REMANE SOLUTION, Response object
    const solution = {
        "insurer_rates": {
            "insurer_a": 0,
            "insurer_b": 0,
            "insurer_c": 0
        }
    }



    //TODO Calculate Customer Quota
    var listofitems = ["windows", "contents", "tires", "contents", "doors", "engine"]

    //Insurance Coverage Relationships
    //"windows+contents", "tires+contents", "doors+engine"

    for (const key in objWithTopThreeCovers) {
        const element = objWithTopThreeCovers[key];

    }

    
    res.json({ message: objWithTopThreeCovers })
    //res.json({ message: solution })
})

module.exports = Router