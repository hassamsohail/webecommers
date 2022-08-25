// import React from 'react'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
// import sofa from '../images/sofa.png'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'

// import sofa from '../images/sofa.png'
// import '../App.css'
// import ".../"
// import '.../App.css'
import HeroSection from '../HeroSection'

import '../Navbar.css'
import '../HeroSection.css'
// import './Navbar.css'

function Create() {
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
  const [Email, setEmail] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [Password, setPassword] = useState('')
  const [First, setFirst] = useState('')
  const [Last, setLast] = useState('')

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
        className="nav-Login"
        style={{
          paddingLeft: '30%',
          paddingTop: '3%',
          // flex: 1,
          height: '70%',
          width: '100%',
          // // display: 'flex',
          // backgroundColor: 'pink',
          justifyContent: 'center',
        }}
      >
        <text
          style={{
            // fontSize:
            fontSize: 30,
            marginLeft: '2.5%',
            fontWeight: 'bold',
            // fontSize:""
          }}
        >
          Create Account
        </text>
        <form
          style={{
            padding: 30,
          }}
        >
          <label>
            Enter your First Name:
            <input
              type="text"
              value={First}
              style={{
                width: '40%',
                height: 40,
                marginLeft: '1.5%',
                paddingLeft: '1%',

                // backgroundColor: 'pink',
              }}
              placeholder={'First Name'}
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
        </form>
        <form
          style={{
            padding: 30,
          }}
        >
          <label>
            Enter your Last Name:
            <input
              type="text"
              value={Last}
              style={{
                width: '40%',
                height: 40,
                marginLeft: '1.5%',
                paddingLeft: '1%',

                // backgroundColor: 'pink',
              }}
              placeholder={'Last Name'}
              onChange={(e) => setLast(e.target.value)}
            />
          </label>
        </form>
        <form
          style={{
            paddingLeft: 30,
          }}
        >
          <label>
            Enter your Email:
            <input
              type="text"
              value={Email}
              style={{
                width: '39%',
                paddingLeft: '1%',
                height: 40,
                marginLeft: '5%',
                // backgroundColor: 'pink',
              }}
              placeholder={'Email'}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <form
          style={{
            padding: 30,
          }}
        >
          <label>
            Enter your Password:
            <input
              type="text"
              value={Password}
              style={{
                width: '40%',
                height: 40,
                marginLeft: '2.5%',
                paddingLeft: '1%',

                // backgroundColor: 'pink',
              }}
              placeholder={'Passowrd'}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </form>

        <div
          style={{
            width: '20%',
            marginLeft: '20%',
            height: 40,
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#D80000',
          }}
        >
          <text
            style={{
              color: '#fff',
            }}
          >
            SignUp
          </text>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '24%',
          }}
        >
          {/* <li> */}
          <Link
            style={{
              width: '30%',
              color: 'black',
            }}
            to="/Login"

            // className="nav-link"
            // onClick={closeMobileMenu}
          >
            <text
              style={
                {
                  // marginLeft: '2%',
                  // color: '#fff',
                }
              }
            >
              Back To Home page
            </text>
          </Link>
          {/* </li> */}
        </div>
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
  )
}
export default Create
