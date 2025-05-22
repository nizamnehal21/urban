import { useState } from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Beauty from './beauty/Beauty'
import Wall from './wall/Wall'
import Native from './native/Native'
import Cart from './cart/Cart'



// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beauty' element={<Beauty/>}/>
      <Route path='/wall' element={<Wall/>}/>
      <Route path='/native' element={<Native/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
