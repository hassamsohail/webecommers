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
        // borderWidth: '3px',
        // borderWidth: 1,
        // borderColor: '#707070',
        // justifyContent: 'center',
        // backgroundColor: 'pink',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Image   /> */}

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
          marginLeft: '60px',
        }}
      >
        {product.TotalPrice}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '130px',
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
          marginLeft: '180px',
        }}
      >
        {product.Addres}
      </text>
      <text
        style={{
          color: 'black',
          fontSize: '20px',
          marginLeft: '130px',
        }}
      >
        {product.Phone}
      </text>

      <div
        style={{
          width: '10%',
          height: '40px',
          borderRadius: 20,
          backgroundColor: '#754133',
          display: 'flex',
          marginLeft: '70px',
          paddingTop: '8px',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <text
          style={{
            color: '#fff',
            alignItems: 'center',
            // textAlign: 'center',
            fontSize: '20px',
          }}
        >
          Delivered
        </text>
        <FaArrowAltCircleRight
          style={{
            color: '#fff',
            marginLeft: '10px',
          }}
          size={20}
        />
      </div>
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
            marginLeft: '7%',
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
            width: '12%',
            marginLeft: '3%',
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
            marginLeft: '3%',
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
            marginLeft: '3%',
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
        <div
          style={{
            width: '12%',
            marginLeft: '3%',
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
            Delivery status
          </text>
        </div>
      </div>
      <div>{ProductDetail}</div>
    </div>
  )
}
export default Order
