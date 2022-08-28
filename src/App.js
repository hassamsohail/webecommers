import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'

import Login from './components/pages/Login'
import Brand from './components/pages/Brand'
import Cart from './components/pages/Cart'
import Addcart from './components/pages/Addcart'
import Addcart2 from './components/pages/Addcart2'
import Create from './components/pages/Create'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        {/* <Switch> */}
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Brand" component={Brand} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Addcart" component={Addcart} />
        <Route path="/Addcart2" component={Addcart2} />
        <Route path="/Create" component={Create} />

        {/* </Switch> */}
      </Routes>
    </>
  )
}

export default App
