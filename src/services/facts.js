/* eslint-disable indent */
const API_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(API_FACT_URL)
        .then(res => res.json())
        .then(response => {
            const { fact } = response
            return fact
        })
}
