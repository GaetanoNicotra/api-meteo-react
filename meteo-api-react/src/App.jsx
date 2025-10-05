import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NoFound from './pages/NoFound'
import MoreDays from './pages/MoreDays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoFound />}> </Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/moredays' element={<MoreDays />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
