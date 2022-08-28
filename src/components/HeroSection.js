import React, { useState, useEffect } from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import './Navbar.css'
import { FaPlusCircle } from 'react-icons/fa'

import { Link, Route, Routes } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
function HeroSection({}) {

  let history = useHistory()
  const ClickHandle = () => {}


  const dat = [{}]
  const Product = [
    {
      id: 1,
      vedio: '/images/vid.mp4',

      src: '../images/Item1.png',
      ProductName: ' Mascara',
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
    },
    {
      id: 1,

      vedio: '/images/vid.mp4',
      src: '../images/sofa.png',
      ProductName: "Woman's Makeup bag",
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
    },
    {
      id: 1,

      src: '../images/sofa.png',
      ProductName: "Woman's Makeup bag",
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
      vedio: '/images/vid.mp4',

    },
    {
      id: 1,

      src: '../images/sofa.png',
      ProductName: "Woman's Makeup bag",
      ProductPrice: 'Rs25000',
      ProductDiscount: 'Rs5000',
      vedio: '/images/vid.mp4',
    },
  ]
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
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
      onClick={() => {
        history.push('/Cart', {
          ProductName: product.ProductName,
          ProductPrice: product.ProductPrice,
          ProductDiscount: product.ProductDiscount,
          image: product.src,
          vedio: product.vedio,
        })
      }}
      style={{
        marginRight: '1%',
        width: '97%',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 400,
          justifyContent: 'center',
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
            marginTop: '2%',
            backgroundColor: '#08C0E4',
          }}
        >
          New
        </text>
        <img
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
                color: '#754133',
                marginLeft: '1%',
              }}
              size={25}
            />
            <FaStar
              style={{
                marginLeft: '2%',

                color: '#754133',
              }}
              size={25}
            />{' '}
            <FaStar
              style={{
                marginLeft: '2%',

                color: '#754133',
              }}
              size={25}
            />{' '}
            <FaStar
              style={{
                marginLeft: '2%',

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
              }}
            >
              6 review
            </text>
          </div>
          <text
            style={{
              justifyContent: 'center',
              display: 'flex',
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
              fontSize: 28,
              color: 'black',
              marginTop: '4%',

              fontWeight: 'bold',
            }}
          >
            {product.ProductPrice}
          </text>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="hero-container">
      <ul
        style={{
          marginTop: '1%',
        }}
        className={click ? 'nav-menu' : 'nav-menu'}
      >
        <li
          style={
            {
            }
          }
          className="nav-item"
        >
          <Link
            style={{
              color: 'black',
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
            }
          }
          className="nav-item"
        >
          <Link
            style={{
              color: 'black',
            }}
            to="/Brand"
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
          height: '1.5px',
          width: '100%',
          marginTop: '1%',
          backgroundColor: '#DADADA',
        }}
      ></div>
      <div
        style={{

          marginTop: '3%',
        }}
      >
        <img
       
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
            flexDirection: 'row',
            display: 'flex',
            width: '100%',
          }}
        >
          {ProductDetail}
        </div>

        <div
          style={{
            marginTop: '2%',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img2.png'}
          />
        </div>
        <div
          style={{
            marginTop: '2%',
          }}
        >
          <img

            style={{
              width: '100%',
              height: '20%',
            }}
            src={'../images/img3.png'}
          />
        </div>
        <div
          style={{
            marginTop: '2%',
          }}
        >
          <img

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
            flexDirection: 'row',
            display: 'flex',
            width: '100%',
          }}
        >
          {ProductDetail}
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
