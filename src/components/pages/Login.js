// import React from 'react'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
// import sofa from '../images/sofa.png'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../Navbar.css'
import { useHistory } from 'react-router-dom'

import '../HeroSection.css'
// import './Navbar.css'
import { auth } from '../../firebase'
import Footer from '../Footer'
// import { useNavigate } from '@reach/router'

function Login() {
  let history = useHistory()

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [Email, setEmail] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [Password, setPassword] = useState('')
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
  // const navigate = useNavigate()

  const sign = () => {
    signin()
    // navigate('/Home')
  }
  const signin = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((res) => {
        const user = res.user
        // onClick={() => {
        history.push('/')
        // }}
        console.log(user)
      })
      .catch((error) => {
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
        onClick={sign}
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
          Login
        </text>

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
                marginLeft: '4%',
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
              type="password"
              value={Password}
              style={{
                width: '40%',
                height: 40,
                marginLeft: '1.5%',
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
            Signin
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
          <span>
            <Link
              style={{
                width: '30%',
                color: 'black',
              }}
              to="/Create"

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
                Create account
              </text>
            </Link>
          </span>

          {/* </li> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Login
