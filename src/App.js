import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Category from './components/pages/Category'
import Billing from './components/pages/Billing'
import Order from './components/pages/Order'
import Report from './components/pages/Report'
import Login from './components/pages/Login'
import Brand from './components/pages/Brand'
import Cart from './components/pages/Cart'
import Addcart from './components/pages/Addcart'
import Addcart2 from './components/pages/Addcart2'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch> */}
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Brand" component={Brand} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Addcart" component={Addcart} />
        <Route path="/Addcart2" component={Addcart2} />
        {/* </Switch> */}
      </Router>
    </>
  )
}

export default App
