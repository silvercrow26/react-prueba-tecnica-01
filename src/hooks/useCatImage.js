import { useState, useEffect } from 'react'

// const API_IMG_URL = `https://cataas.com/cat/says/${}`

export const useCatImage = ({ fact }) => {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firsWorld = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firsWorld}?json=true`)
      .then(res => res.json())
      .then(response => {
        setImgUrl(`https://cataas.com${response.url}`)
      })
  }, [fact])
  return { imgUrl }
}
