// import React from 'react'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
// import sofa from '../images/sofa.png'
// import '../App.css'
// import ".../"
// import '.../App.css'
import HeroSection from '../HeroSection'

import '../Navbar.css'
import '../HeroSection.css'
// import './Navbar.css'

import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Category() {
  const Product = [
    {
      id: 1,
      ProductName: 'Brands',
    },
    {
      id: 1,
      ProductName: '  Make Up',
    },
    {
      id: 1,
      ProductName: ' Skin Care',
    },
    {
      id: 1,
      ProductName: 'Health Care',
    },
    {
      id: 1,
      ProductName: 'Personal Care',
    },
    {
      id: 1,
      ProductName: 'Baby Care',
    },
    {
      id: 1,
      ProductName: 'Hair Care',
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
  const ProductDetail = Product.map((product) => (
    <div
      style={{
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        // backgroundColor: 'pink',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      {/* <Image   /> */}
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '100px',
          marginTop: '5px',
        }}
      >
        {product.ProductName}
      </text>
    </div>
  ))
  return (
    <div className="hero-container">
      <text
        style={{
          color: 'black',
          fontSize: '40px',
          fontWeight: 'bold',
          paddingLeft: '2%',
          paddingTop: '5%',
          // padding: '10%',
        }}
      >
        ADMIN PANEL
      </text>

      <ul
        style={{
          marginTop: '1%',
          // backgroundColor: '#f2f2f2',
          // padding: '10%',
        }}
        className={click ? 'nav-menu' : 'nav-menu'}
      >
        <li
          style={
            {
              // backgroundColor: 'red',
            }
          }
          className="nav-item"
        >
          <Link
            style={{
              color: 'black',
              // fontSize: '24px',
              // width: '100%',
              // marginLeft: '2%',
              // textSizeAdjust: '100%',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Manage Product
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/Category"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/Billing"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Billing Invoice
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/Order"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Order Mangement
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/Report"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Report
          </Link>
        </li>
      </ul>
      <div
        style={{
          // borderBottomWidth: '1px',
          height: '1.5px',
          width: '100%',
          marginTop: '1%',
          backgroundColor: '#DADADA',
        }}
      ></div>

      <div
        style={{
          flexDirection: 'row',
          height: '10%',
          width: '90%',
          display: 'flex',
          // backgroundColor: 'pink',
        }}
      >
        <div
          style={{
            width: '12%',
            marginLeft: '5%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            // backgroundColor: '#f2f2f2',
          }}
        >
          <text
            style={{
              color: 'black',
              fontSize: '18px',
            }}
          >
            Product Category List
          </text>
        </div>

        <FaPlusCircle
          style={{ marginleft: '15%', color: '#754133' }}
          size={50}
        />
      </div>
      <div>{ProductDetail}</div>
    </div>
  )
}
// function Category() {
//   return <HeroSection />
// }
export default Category
