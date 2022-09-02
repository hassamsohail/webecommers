// import React from 'react'
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
// import sofa from '../images/sofa.png'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../Navbar.css'
import logo from '../pages/Logo.png'

// import Logo from '../../../public/images/Logo.png'
import { useHistory } from 'react-router-dom'
// import Logo from '../images/Logo.png'
import '../HeroSection.css'
// import './Navbar.css'
// import { auth } from '../firebase'
// auth
// import {auth} from
// import Footer from './Footer'
import { auth } from '../../firebase'
// import { Button } from 'bootstrap'
// import { useNavigate } from '@reach/router'

function Login() {
  let history = useHistory()

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [Email, setEmail] = useState('')
  const [ConfirmEmail, setConfirmEmail] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [Password, setPassword] = useState('')
  const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
  // const navigate = useNavigate()
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value.replace(/\D/g, ''))
  }
  const sign = () => {
    signin()
    // navigate('/Home')
  }
  const signin = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((res) => {
        const user = res.user.displayName
        // onClick={() => {

        history.push('/Home', {
          login: true,
        })
        alert('Sucessfully Login ', user)
        // }}

        console.log(res)
      })
      .catch((error) => {
        alert(error)
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
  console.log(value)
  console.log(typeof value)
  console.log(Number(value))
  return (
    <div className="hero-container">
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: 400,
        }}
      >
        <img
          style={{
            marginTop: 70,
            width: 400,
            height: 400,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          src={logo}
        />
      </div>
      <div
        className="nav-Login"
        style={{
          // marginTop: 100,
          paddingLeft: '26%',
          paddingTop: '3%',
          // flex: 1,
          height: '70%',
          width: '100%',
          // // display: 'flex',
          // backgroundColor: 'pink',
          justifyContent: 'center',
        }}
      >
        {/* <Link to="/">
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '80px',
              height: '80px',
            }}
            // src={Logo}

            // src={'../'}
          />
        </Link> */}
        <text
          style={{
            // fontSize:

            fontSize: 30,
            marginLeft: '30%',
            // marginBottom: 200,
            fontWeight: 'bold',
            // fontSize:""
          }}
        >
          Login
        </text>

        <form
          style={{
            paddingLeft: 30,
            marginTop: '5%',
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
              // onChange={handleChange}
              placeholder={'Email'}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>

        {/* <form
          style={{
            paddingLeft: 30,
          }}
        >
          <label>
            Enter your Confrim Email:
            <input
              type="text"
              value={value}
              // maxLength={9}
              style={{
                width: '39%',
                paddingLeft: '1%',
                height: 40,
                // marginLeft: '2%',
                // backgroundColor: 'pink',
              }}
              onChange={handleChange}
              placeholder={'Confirm Email'}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form> */}

        <form
          style={{
            padding: 30,
          }}
        >
          <label>
            Enter your Password:
            <input
              // maxLength={9}
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
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </label>
        </form>

        <div
          onClick={sign}
          style={{
            width: '20%',
            marginLeft: '24%',
            height: 40,
            borderRadius: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#D80000',
          }}
        >
          <button
            style={{
              borderWidth: 0,
              backgroundColor: '#D80000',
              color: '#fff',
            }}
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
