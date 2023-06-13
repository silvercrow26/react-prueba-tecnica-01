import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCat = () => {
  const [fact, setFact] = useState()

  const getRefreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getRefreshFact, [])

  return { fact, getRefreshFact }
}
