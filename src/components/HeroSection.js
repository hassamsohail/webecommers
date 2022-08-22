// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import './Navbar.css'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HeroSection() {
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
  const ProductDetail = Product.map((product) => (
    <div>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          width: '100%',
          height: '20%',
          // backgroundColor: 'pink',
          // justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Image   /> */}
        <img
          // src=

          style={{
            marginLeft: '4%',
          }}
          src={product.src}
        ></img>

        <text
          style={{
            color: 'black',
            fontSize: '20px',
            marginLeft: '100px',
          }}
        >
          {product.ProductName}
        </text>
        <text
          style={{
            color: 'black',
            fontSize: '20px',
            marginLeft: '60px',
          }}
        >
          {product.ProductPrice}
        </text>
        <text
          style={{
            color: 'black',
            fontSize: '20px',
            marginLeft: '130px',
          }}
        >
          {product.ProductDiscount}
        </text>
        <text
          style={{
            color: '#D3A469',
            fontSize: '20px',
            marginLeft: '150px',
            // color
          }}
        >
          Check
        </text>
        <text
          style={{
            color: '#FF0000',
            fontSize: '20px',
            marginLeft: '150px',
            // color
          }}
        >
          remove
        </text>
      </div>
      <div
        style={{
          // borderBottomWidth: '1px',
          height: '1.5px',
          width: '100%',
          marginTop: '1%',
          backgroundColor: '#DADADA',
        }}
      ></div>
    </div>
  ))
  return (
    <div className="hero-container">
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
            Categories
          </Link>
        </li>
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
            Brands
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
            Make Up
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
            Skin Care
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
            Health Care
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
            Personal Care
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
            Baby Care
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
            Hair Care
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
            Contact Us
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
          // display: 'flex',
          // paddingLeft: '3%',
          // paddingRight: '3%',
          marginTop: '3%',
        }}
      >
        <img
          // className="cards__item__img"
          // alt='Travel Image'
          style={{
            width: '100%',
            height: '20%',
          }}
          src={'../images/img.png'}
        />
        <text
          style={{
            fontSize: '30px',
            display: 'flex',
            fontWeight: 'bold',
            justifyContent: 'center',
            marginTop: '2%',
          }}
        >
          Fresh Sale
        </text>
        <div
          style={{
            // flexDirection: 'row',
            // display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '2%',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img2.png'}
          />
        </div>
        <div
          style={{
            // flexDirection: 'row',
            // display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '2%',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img3.png'}
          />
        </div>
        <div
          style={{
            // flexDirection: 'row',
            // display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '2%',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img4.png'}
          />
        </div>
        <div
          style={{
            // flexDirection: 'row',
            // display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '2%',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img5.png'}
          />
        </div>
        <div
          style={{
            // flexDirection: 'row',
            // display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '2%',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/footer.png'}
          />
        </div>
      </div>
    </div>
  )
}
export default HeroSection
