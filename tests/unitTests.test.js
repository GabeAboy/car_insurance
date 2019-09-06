const { generateInsuranceConfiguration, calculatInsuranceQuote } = require('../insuranceUtility')

describe('generateInsuranceConfiguration', () => {
    const cover = {
        "tires": 10,
        "windows": 50,
        "engine": 20,
        "contents": 30,
        "doors": 15

    }
    it('Should output one descrete insurer relationship, and two single covers', () => {
        expect(generateInsuranceConfiguration(cover)).toStrictEqual(
            [
                {
                    count: 2,
                    score: 0,
                    sum: 80,
                    windows: 50,
                    contents: 30
                },
                {
                    count: 1,
                    score: 0,
                    sum: 30,
                    contents: 30
                },
                {
                    count: 1,
                    score: 0,
                    sum: 20,
                    engine: 20
                }
            ]
        )
    })
})

describe('generateInsuranceConfiguration', () => {
    const cover = {
        "tires": 40,
        "windows": 50,
        "engine": 20,
        "contents": 30,
        "doors": 15

    }
    it('Should output two descrete insurer relationships, and one single cover', () => {
        expect(generateInsuranceConfiguration(cover)).toStrictEqual(
            [
                {
                    count: 2,
                    score: 0,
                    sum: 80,
                    windows: 50,
                    contents: 30
                },
                {
                    count: 2,
                    score: 0,
                    sum: 70,
                    tires: 40,
                    contents: 30
                },
                {
                    count: 0,
                    score: 0,
                    sum: 0
                }
            ]

        )
    })
})

describe('calculateInsuranceQuote', () => {
    const insuranceConfiguration = [
        {
            count: 2,
            score: 0,
            sum: 80,
            windows: 50,
            contents: 30
        },
        {
            count: 2,
            score: 0,
            sum: 70,
            tires: 40,
            contents: 30
        },
        {
            count: 0,
            score: 0,
            sum: 0
        }
    ]
    it('Two matching insurers, should output the insurerQuota object with scores', () => {
        expect(calculatInsuranceQuote(insuranceConfiguration)).toStrictEqual(
            [
                {
                    count: 2,
                    score: 8,
                    sum: 80,
                    windows: 50,
                    contents: 30
                },
                {
                    count: 2,
                    score: 7,
                    sum: 70,
                    tires: 40,
                    contents: 30
                },
                {
                    count: 0,
                    score: 0,
                    sum: 0
                }
            ]

        )
    })
})

describe('calculateInsuranceQuote', () => {
    const insuranceConfiguration = [
        {
            count: 2,
            score: 0,
            sum: 80,
            windows: 50,
            contents: 30
        },
        {
            count: 1,
            score: 0,
            sum: 30,
            contents: 30
        },
        {
            count: 1,
            score: 0,
            sum: 20,
            engine: 20
        }
    ]

    it('Single matching insurer, should output the insurerQuota object with scores', () => {
        expect(calculatInsuranceQuote(insuranceConfiguration)).toStrictEqual(
            [
                {
                    count: 2,
                    score: 8,
                    sum: 80,
                    windows: 50,
                    contents: 30
                },
                {
                    count: 1,
                    score: 7.5,
                    sum: 30,
                    contents: 30
                },
                {
                    count: 1,
                    score: 6,
                    sum: 20,
                    engine: 20
                }
            ]
        )
    })
})