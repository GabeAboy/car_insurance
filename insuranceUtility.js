function generateInsuranceConfiguration(covers){
    let insurerConfiguration = [
        {
            count: 0,
            score: 0,
            sum: 0
        },
        {
            count: 0,
            score: 0,
            sum: 0
        },
        {
            count: 0,
            score: 0,
            sum: 0
        }
    ]
    //Generates insurer configuration object
    for (var i = 0; i < 3; i++) {
        let keyToLocalMax
        let max = 0;
        for (const key in covers) {
            if (covers[key] >= max) {
                max = covers[key]
                keyToLocalMax = key
            }
        }
        //Insurer_a
        if (keyToLocalMax == 'windows' || keyToLocalMax == 'contents') {
            insurerConfiguration[0][keyToLocalMax] = covers[keyToLocalMax]
            insurerConfiguration[0].count += 1
            insurerConfiguration[0].sum += covers[keyToLocalMax]

        }//Insurer_b
        if (keyToLocalMax == 'tires' || keyToLocalMax == 'contents') {
            insurerConfiguration[1][keyToLocalMax] = covers[keyToLocalMax]
            insurerConfiguration[1].count += 1
            insurerConfiguration[1].sum += covers[keyToLocalMax]

        }//Insurer_c
        else if (keyToLocalMax == 'doors' || keyToLocalMax == 'engine') {
            insurerConfiguration[2][keyToLocalMax] = covers[keyToLocalMax]
            insurerConfiguration[2].count += 1
            insurerConfiguration[2].sum += covers[keyToLocalMax]

        }
        //Delete recently added maximum
        delete covers[keyToLocalMax]
    }
    return insurerConfiguration
}
function calculatInsuranceQuote(insurerConfiguration) {

    //Calculates insurer quotes
    for (let i = 0; i < insurerConfiguration.length; i++) {
        if (insurerConfiguration[i].count == 2) {
            insurerConfiguration[i].score = .10 * insurerConfiguration[i].sum
        }
        else if (i == 0) {
            insurerConfiguration[0].score = .20 * insurerConfiguration[0].sum
        }
        else if (i == 1) {
            insurerConfiguration[1].score = .25 * insurerConfiguration[1].sum

        }
        else if (i == 2) {
            insurerConfiguration[2].score = .30 * insurerConfiguration[2].sum
        }
    }
    return insurerConfiguration

}

module.exports.generateInsuranceConfiguration = generateInsuranceConfiguration
module.exports.calculatInsuranceQuote = calculatInsuranceQuote