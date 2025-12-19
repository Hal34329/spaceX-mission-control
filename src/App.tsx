import { useState } from 'react'
import Fetch from './components/fetch'
import type { Launch } from './types/launch'


function App() {
  const [launches, setLaunches] = useState<Launch[]>([])

  return (
    <>
      <Fetch launches={launches} setLaunches={setLaunches} />
    </>
  )
}

export default App
