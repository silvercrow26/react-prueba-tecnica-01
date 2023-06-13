/* eslint-disable no-trailing-spaces */
import { useCat } from './hooks/useCat'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, getRefreshFact } = useCat()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = () => {
    getRefreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p id='parrafo'>{fact}</p>}
        {imgUrl && <img src={imgUrl} />}
      </section>
    </main>
  )
}
