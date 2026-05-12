import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/Home/Home'
import Contacts from './pages/Contacs/Contacts'
import Sv from './pages/Sv/Sv'
import Daniel from './pages/Daniel/Daniel'
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contacts' element={<Contacts/> } />
  <Route path='/sv' element={<Sv/>} />
  <Route path='/daniel' element={<Daniel/>} />
  
</Routes>
</BrowserRouter>
  )
}



export default App

