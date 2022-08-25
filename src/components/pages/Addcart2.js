// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../../App.css'
import '../HeroSection.css'
import YouTube from 'react-youtube'
import '../Navbar.css'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { FaItchIo } from 'react-icons/fa'

import { FaTimes } from 'react-icons/fa'
function Addcart2() {
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
    <div>
      <div
        style={{
          padding: 20,

          //   flexDirection: 'row',
          //   display: 'flex',
          // alignItems:
          //   display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          width: '30%',
          height: '100%',
          //   backgroundColor: 'blue',
          //   backgroundColor: 'black',
        }}
      >
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            // alignItems:
            justifyContent: 'space-between',
            width: '100%',
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

          <FaTimes size={35} />
        </div>
        <div
          //   class="shadow-2"
          style={{
            webkitBoxShadow: '1px 3px 1px #9E9E9E',
            mozBoxShadow: '1px 3px 1px #9E9E9E',
            boxShadow: '1px 2px 9px #9E9E9E',
            width: '90%',
            marginTop: '10%',
            height: 130,
            marginLeft: '4%',
            // backgroundColor: 'pink',
            paddingTop: '5%',
            padding: '3%',
          }}
        >
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <img
              // className="cards__item__img"
              // alt='Travel Image'
              style={{
                width: '20%',
                height: '20%',
              }}
              src={'../images/sofa.png'}
            />
            <h2
              style={{
                fontSize: 16,
                color: 'black',
                marginLeft: '2%',
              }}
            >
              Maybelline Ny volumn Express The colossal washable maskara
            </h2>
            <FaTimes size={25} />
          </div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <h2
              style={{
                fontSize: 20,
                color: 'black',
                marginLeft: '23%',
                borderWidth: 1,
                // borderColor: 'grey',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              2
              {/* Maybelline Ny volumn Express The colossal washable maskara */}
            </h2>

            <h2
              style={{
                fontSize: 25,
                color: 'red',
                marginLeft: '8%',
              }}
            >
              RS.3803
              {/* Maybelline Ny volumn Express The colossal washable maskara */}
            </h2>

            <h2
              style={{
                textDecorationLine: 'line-through',
                fontSize: 16,
                color: 'lightgrey',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '5%',
              }}
            >
              {/* Maybelline Ny volumn Express The colossal washable maskara */}
              RS.4,803
            </h2>
          </div>
        </div>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            position: 'absolute',
            bottom: 6,
            width: '26%',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: '40%',
              height: 40,
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F7C17C',
              borderRadius: 10,
            }}
          >
            <FaItchIo
              size={25}
              style={{
                marginRight: '7%',
                color: 'white',
              }}
            />
            <h2
              style={{
                fontSize: 18,
                color: 'white',
              }}
            >
              Go To Order
            </h2>
          </div>
          <div
            style={{
              width: '40%',
              height: 40,
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F7C17C',
              borderRadius: 10,
            }}
          >
            <h2
              style={{
                fontSize: 18,
                color: 'white',
              }}
            >
              Cancel
            </h2>
          </div>
        </div>
        <div
          //   class="shadow-2"
          style={{
            webkitBoxShadow: '1px 3px 1px #9E9E9E',
            mozBoxShadow: '1px 3px 1px #9E9E9E',
            boxShadow: '1px 2px 9px #9E9E9E',
            width: '26%',
            position: 'absolute',
            bottom: 80,
            marginTop: '10%',
            height: 170,
            // marginLeft: '4%',
            // backgroundColor: 'pink',
            paddingTop: '5%',
            padding: '3%',
          }}
        >
          <h2
            style={{
              fontSize: 24,
              color: 'black',
            }}
          >
            Order Summary
          </h2>
          <div
            style={{
              // borderBottomWidth: '1px',
              height: '1.5px',
              width: '100%',
              marginTop: '1%',
              backgroundColor: 'black',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginTop: '5%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h2
              style={{
                fontSize: 18,
                color: 'black',
              }}
            >
              Your Save
            </h2>
            <h2
              style={{
                fontSize: 18,
                color: 'black',
              }}
            >
              Rs 1246
            </h2>{' '}
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginTop: '5%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <h2
              style={{
                fontSize: 18,
                color: 'black',
              }}
            >
              Grand Total
            </h2>
            <h2
              style={{
                fontSize: 18,
                color: 'black',
              }}
            >
              Rs 3803
            </h2>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Addcart2
