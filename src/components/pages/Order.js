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

import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

function Order() {
  const Product = [
    {
      id: 1,

      src: '../images/sofa.png',
      // Image: '../images/sofa.png',
      // photo: sofa,
      Name: "Woman's Makeup bag",
      Discount: 'Rs5000',
      TotalPrice: 'Rs2500',
      Qunatity: '5',
      Addres: 'Gujrat',
      Phone: '+9123456721',
      statu: 'Pending',
      // ProductRating:""
    },
    {
      id: 1,

      src: '../images/sofa.png',
      // Image: '../images/sofa.png',
      // photo: sofa,
      Name: "Woman's Makeup bag",
      Discount: 'Rs5000',
      TotalPrice: 'Rs2500',
      Qunatity: '5',
      Addres: 'Gujrat',
      Phone: '+9123456713',
      statu: 'Deliverd',

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
  const ProductDetail = Product.map((product) => (
    <div
      className="Order"
      style={{
        // backgroundColor: 'pink',
        borderRadius: 20,
        flexDirection: 'row',
        width: '100%',
        height: 100,
        // paddingTop: '3%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '70px',
        }}
      >
        {product.Name}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '70px',
        }}
      >
        {product.TotalPrice}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '140px',
        }}
      >
        {product.Discount}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '150px',
        }}
      >
        {product.Qunatity}
      </text>

      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '184px',
        }}
      >
        {product.Addres}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '161px',
        }}
      >
        {product.Phone}
      </text>
    </div>
  ))
  return (
    <div>
      <Navbar />

      <div className="hero-container">
        <div
          style={{
            flexDirection: 'row',
            height: '10%',
            width: '100%',
            display: 'flex',
            // backgroundColor: 'pink',
          }}
        >
          <div
            style={{
              width: '12%',
              marginLeft: '1%',
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
              Name
            </text>
          </div>
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
              Total Price
            </text>
          </div>
          <div
            style={{
              width: '10%',
              marginLeft: '2%',
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
              Discount
            </text>
          </div>
          <div
            style={{
              width: '12%',
              marginLeft: '2%',
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
              Quantity
            </text>
          </div>
          <div
            style={{
              width: '12%',
              marginLeft: '1%',
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
              Address
            </text>
          </div>
          <div
            style={{
              width: '12%',
              marginLeft: '3%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              // marginRight: '10%',
              // backgroundColor: '#f2f2f2',
            }}
          >
            <text
              style={{
                color: 'black',
                fontSize: '18px',
              }}
            >
              Phone number
            </text>
          </div>
        </div>
        <div>{ProductDetail}</div>
      </div>
    </div>
  )
}
export default Order
