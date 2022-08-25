// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
// import '../App.css'
import '../../App.css'
import '../HeroSection.css'
import '../Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
function Brand() {
  const Product = [
    {
      id: 1,

      src: '../images/Item1.png',
      // Image: '../images/sofa.png',
      // photo: sofa,
      ProductName: 'Maybelline NY Mascara',
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
    <Link
      to="/Addcart2"
      style={{
        width: '100%',
      }}
      // className="nav-links"
      // onClick={closeMobileMenu}
      // >
    >
      <div
        style={{
          // backgroundColor: 'pink',
          marginRight: '1%',
          width: '97%',
        }}
      >
        <div
          // onClick={nextPage}
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'center',
            // display: 'flex',
            // backgroundColor: 'pink',
          }}
        >
          <text
            style={{
              color: '#fff',
              width: 50,
              paddingLeft: 3,
              position: 'absolute',
              // left: 0,
              backgroundColor: '#EB5345',
            }}
          >
            Sales
          </text>
          <text
            style={{
              color: '#fff',
              width: 50,
              paddingLeft: 3,
              position: 'absolute',
              // left: 0,
              marginTop: '2%',
              backgroundColor: '#08C0E4',
            }}
          >
            New
          </text>
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '50%',
              marginLeft: '23%',
              height: '50%',
            }}
            src={product.src}
          />

          <div
            style={{
              height: '50%',
              width: '100%',
              backgroundColor: '#FDF1E2',
            }}
          >
            <text
              style={{
                justifyContent: 'center',
                display: 'flex',
                // textAlign: 'center',
                fontSize: 24,
                marginTop: '2%',

                color: 'black',
              }}
            >
              Maybelline NY Mascara
            </text>
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                paddingLeft: '20%',
                marginTop: '10%',
              }}
            >
              <FaStar
                style={{
                  // backgroundColor: '#754133',
                  color: '#754133',
                  marginLeft: '1%',
                }}
                size={25}
              />
              <FaStar
                style={{
                  marginLeft: '2%',

                  // backgroundColor: '#754133',
                  color: '#754133',
                }}
                size={25}
              />{' '}
              <FaStar
                style={{
                  marginLeft: '2%',

                  // backgroundColor: '#754133',
                  color: '#754133',
                }}
                size={25}
              />{' '}
              <FaStar
                style={{
                  marginLeft: '2%',

                  // backgroundColor: '#754133',
                  color: '#754133',
                }}
                size={25}
              />{' '}
              <FaStarHalfAlt
                style={{
                  marginLeft: '2%',
                  // backgroundColor: '#754133',
                  color: '#754133',
                }}
                size={25}
              />
              <text
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  // textAlign: 'center',
                  fontSize: 18,
                  marginLeft: '2%',
                  color: 'black',
                  // textDecorationLine: 'line-through',
                }}
              >
                6 review
              </text>
            </div>
            <text
              style={{
                justifyContent: 'center',
                display: 'flex',
                // textAlign: 'center',
                fontSize: 18,
                color: 'red',
                marginTop: '4%',

                textDecorationLine: 'line-through',
              }}
            >
              {product.ProductDiscount}
            </text>

            <text
              style={{
                justifyContent: 'center',
                display: 'flex',
                // textAlign: 'center',
                fontSize: 28,
                color: 'black',
                marginTop: '4%',

                fontWeight: 'bold',
                // textDecorationLine: 'line-through',
              }}
            >
              {product.ProductPrice}
            </text>
          </div>
        </div>
      </div>
    </Link>
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
            to="/"
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
            to="/"
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
            to="/"
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
            to="/"
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
            to="/"
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
            to="/"
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
        style={{
          width: '100%',
          height: '100%',
          // backgroundColor: 'pink',
          // flexDirection: 'row',
          // display: 'flex',
        }}
      >
        {/* <div
            style={{
              widt: '100%',
              height: 40,

              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              // marginLeft: '2%',
              paddingLeft: '2%',
              backgroundColor: 'lightgrey',
            }}
          >
            <text
              style={{
                fontSize: 20,
                color: 'black',
              }}
            >
              Home
            </text>
            <FaAngleRight size={20} />
            <text
              style={{
                fontSize: 20,
                color: 'black',
              }}
            >
              Sale
            </text>
          </div> */}

        {/* <div
          style={
            {
              // display: 'flex',
            }
          }
        >
          {ProductDetail}
        </div> */}
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            marginTop: '2%',
            width: '100%',
          }}
        >
          {ProductDetail}
        </div>

        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            marginTop: '2%',
            width: '100%',
          }}
        >
          {ProductDetail}
        </div>
      </div>
      <div
        style={{
          // flexDirection: 'row',
          // display: 'flex',
          // justifyContent: 'space-between',
          marginTop: '10%',
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
export default Brand
