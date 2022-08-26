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

function Cart() {
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
          flexDirection: 'row',
          width: '100%',
          height: '70%',
          display: 'flex',
          // backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '40%',
            // backgroundColor: 'pink',
            display: 'flex',
            height: '70%',
            justifyContent: 'center',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '70%',
              //   direction: 'flex',
              // jus

              //   marginLeft: '23%',
              height: '100%',
            }}
            src={'../images/Item1.png'}
          />
        </div>

        <div
          style={{
            // marginLeft: '10%',
            width: '60%',
            // display: 'flex',

            // backgroundColor: 'blue',
          }}
        >
          <h2
            style={{
              fontSize: 50,
              color: 'black',
            }}
          >
            Maybelline Ny volumn Express THE colossal washable maskara
          </h2>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              marginTop: '4%',
            }}
          >
            <h2
              style={{
                fontSize: 30,
                color: '#F7C17C',
              }}
            >
              Rs 20000
            </h2>
            <h2
              style={{
                fontSize: 20,
                color: 'red',
                marginLeft: '5%',
                textDecorationLine: 'line-through',
              }}
            >
              Rs 20000
            </h2>
          </div>
          <div
            style={{
              // borderBottomWidth: '1px',
              height: '2px',
              width: '60%',
              marginTop: '4%',
              backgroundColor: '#F7C17C',
            }}
          ></div>

          <h2
            style={{
              fontSize: 20,
              color: 'black',
              //   marginLeft: '5%',
              //   textDecorationLine: 'line-through',
            }}
          >
            Qunatity
          </h2>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <div
              className="boder"
              onClick={decrementCount}
              style={{
                height: 30,
                width: 30,
                // backgroundColor: 'pink',
                backgroundColor: '#F7C17C',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: 4,
                // borderColor: 'black',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                }}
              >
                -
              </h2>
            </div>
            <h2
              style={{
                color: 'black',
                fontSize: 16,
              }}
            >
              {count}
            </h2>
            <div
              onClick={incrementCount}
              className="boder"
              style={{
                height: 30,
                width: 30,
                // backgroundColor: 'pink',
                backgroundColor: '#F7C17C',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: 4,
              }}
            >
              <h2
                style={{
                  color: '#fff',
                }}
              >
                +
              </h2>
            </div>
          </div>
          <li>
            <Link to="/Addcart2" className="nav-link" onClick={closeMobileMenu}>
              <div
                style={{
                  width: '60%',
                  height: 40,
                  borderRadius: 10,
                  marginTop: '5%',

                  backgroundColor: '#F7C17C',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h2
                  style={{
                    color: 'white',
                    // fontSize: 18,

                    textAlign: 'center',
                  }}
                >
                  ADD TO CART
                </h2>
              </div>
            </Link>
          </li>
          <div
            style={{
              width: '60%',
              height: 40,
              marginTop: '2%',
              borderRadius: 10,

              backgroundColor: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                color: 'white',
                textAlign: 'center',
              }}
            >
              CHECK OUT
            </h2>
          </div>
        </div>
      </div>
      <text
        style={{
          fontWeight: 'bold',
          fontSize: 30,

          color: 'black',
          marginLeft: '3%',
        }}
      >
        Discription
      </text>
      <h2
        style={{
          // fontWeight: 'bold',
          fontSize: 20,
          color: 'black',
          marginLeft: '3%',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h2>

      <video
        style={{
          marginLeft: '15%',
        }}
        width="1000"
        height="570"
        controls
      >
        <source src={'../images/vid.mp4'} type="video/mp4" />
      </video>
      <h2
        style={{
          fontWeight: 'bold',
          marginTop: '5%',
          fontSize: 30,
          color: 'black',
          marginLeft: '1.7%',
        }}
      >
        Review
      </h2>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          // paddingLeft: '20%',
          // marginTop: '10%',
        }}
      >
        <FaStar
          style={{
            // backgroundColor: '#754133',
            color: '#754133',
            marginLeft: '1.7%',
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
      <h2
        style={{
          // fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
          marginLeft: '1.7%',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h2>
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
export default Cart
