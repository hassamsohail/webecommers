// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../../App.css'
import '../HeroSection.css'
import '../Navbar.css'
// import { Link } from 'react-router-dom'
// Link
import { Link } from 'react-router-dom'

import { FaItchIo } from 'react-icons/fa'
import SlidingPane from 'react-sliding-pane'
// import "react-sliding-pane"
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { render } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
function Addcart() {
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1)
  }
  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1)
  }
  const [count, setCount] = React.useState(0)

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [name, setName] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return <></>
}
export default Addcart
