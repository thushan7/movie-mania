import { useState, useEffect } from 'react'
import Start from './components/Start'
import Generator from './components/Generator'
import List from './components/List'
import {generateList} from './utils/functions'

function App() {
  const [list, setList] = useState(null)
  const [genre, setGenre] = useState()
  const [rating, setRating] = useState(null)
  const [length, setLength] = useState()

  function updateList() {
    let newList = generateList({genre, rating, length})
    setList(newList)
  }
  useEffect(() => {
    if (list && list.length > 0) {
      window.location.href = '#list'
    }
  }, [list]);

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-stone-950 via-stone-800 to-stone-950 text-red-600'>
      <Start />
      <Generator 
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
        length={length}
        setLength={setLength}
        updateList={updateList}
      />
      {list && (<List list={list}/>)}
    </main>
  )
}

export default App
