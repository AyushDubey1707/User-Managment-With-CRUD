import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom" 
import Home from './pages/Home'
import Create from './pages/AddEdit'
import 'bootstrap/dist/css/bootstrap.min.css' 
import View from './pages/View'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
