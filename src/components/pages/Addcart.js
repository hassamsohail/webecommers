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
  const Product = [
    {
      id: 1,

      src: '../images/sofa.png',
      // Image: '../images/sofa.png',
      // photo: sofa,
      ProductName: "Woman's Makeup bag",
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
      // ProductRating:""
    },
    {
      id: 1,

      src: '../images/sofa.png',
      // Image: '../images/sofa.png',
      // photo: sofa,
      ProductName: "Woman's Makeup bag",
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
      // ProductRating:""
    },
  ]
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

  return (
    <div
      className="hero-container"
      style={{
        marginLeft: '60%',
      }}
    >
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          // alignItems:
          justifyContent: 'space-between',
          width: '35%',
          //   backgroundColor: 'black',
        }}
      >
        <h2
          style={{
            fontSize: 30,
            color: 'black',
          }}
        >
          Your Cart
        </h2>
        <Link
          to="/"
          style={{
            // backgroundColor: 'black',
            color: 'black',
            // width: '100%',
          }}
        >
          <FaTimes size={35} />
        </Link>
      </div>
      <h2
        style={{
          fontSize: 30,
          color: 'black',
          width: '35%',
          marginTop: '15%',

          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Your Cart is Currently Empty
      </h2>
      <h2
        style={{
          fontSize: 20,
          color: 'black',
          width: '35%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          marginTop: '3%',
        }}
      >
        We found , everything you need to support healthy oral care habit for
        life.
      </h2>

      <div
        style={{
          //   fontSize: 30,
          //   color: 'black',
          width: '35%',
          marginTop: '3%',

          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div
          style={{
            height: 50,
            width: '50%',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#754133',
          }}
        >
          <FaItchIo
            size={30}
            style={{
              marginRight: '7%',
              color: 'white',
            }}
          />
          {/* <li> */}
          <Link
            to="/"
            // className="nav-links"
            // onClick={closeMobileMenu}
          >
            <h2
              style={{
                fontSize: 20,
                color: 'white',
              }}
            >
              Shop Now
            </h2>
          </Link>
          {/* </li> */}
        </div>
      </div>
    </div>
  )
}
export default Addcart
