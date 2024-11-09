import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import New from './components/New'
import Feature from './components/Feature'
import usememoCounter from './components/usememoCounter'
import Counter2 from './components/Counter2'
import ParentComponent from './components/ParentComponent'
import ParentRef from './components/ParentRef'
import CascadingDropdown from './components/DropDown'
import DropDown from './components/DropDown'

const App = () => {
  return (
  //   <BrowserRouter>
  //  <Routes>
  //   <Route path='/' element={<Home/>}/>
  //   <Route path='about' element={<About/>}>
  //     <Route  index element={<New/>}/>
  //     <Route path='new' element={<New/>}/>
  //     <Route path='feature' element={<Feature/>}/>
  //   </Route>
  //  </Routes>
  //   </BrowserRouter>
  <div>
   {/* <ParentComponent/> */}
   {/* <ParentRef/> */}
   <DropDown/>
  </div>
  )
}

export default App
