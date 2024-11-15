import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Delete from './components/Delete'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      
      <br />
      <br />
      <Routes>
      
      <Route>
        <Route path = '/home' element = {<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>

        
      </Route>
      
      
      
     </Routes>
    </>
  )
}

export default App
