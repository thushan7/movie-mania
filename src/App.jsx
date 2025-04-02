import { useState } from 'react'
import Start from './components/Start'
import Generator from './components/Generator'
import List from './components/List'

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-stone-950 via-stone-800 to-stone-950 text-red-600'>
      <Start />
      <Generator />
      <List />
    </main>
  )
}

export default App
