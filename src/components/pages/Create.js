import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../Navbar.css'
import '../HeroSection.css'
import { auth } from '../../firebase'

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
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [Email, setEmail] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [Password, setPassword] = useState('')
  const [First, setFirst] = useState('')
  const [Last, setLast] = useState('')
  const HandleSubmit = () => {
    setsubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((res) => {
        setsubmitButtonDisabled(false)

        const user = res.user

        console.log(user)
      })
      .catch((error) => {
        setsubmitButtonDisabled(false)
        console.log('Error', error.message)
      })
  }
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
        <li style={{}} className="nav-item">
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
        <button
          disabled={submitButtonDisabled}
          onClick={HandleSubmit}
          className="button"
        >
          SignUp
        </button>
        {/* <div>
          <text
            style={{
              color: '#fff',
            }}
          ></text>
        </div> */}
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
