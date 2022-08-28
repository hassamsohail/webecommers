import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'
function Navbar() {
  const Pagename = [
    {
      name: 'Home',
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
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '80px',
              height: '80px',
            }}
            src={'../images/Logo.png'}
          />
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>

        <div
          className="nav-serach"
          style={
            {
              // flexDirection: 'row',
            }
          }
        >
          <FaSearch
            style={{
              color: '#F7C17C',
              // marginTop: '1.5%',
              marginLeft: '3%',
              // background: 'red',
            }}
            size={30}
          />

          <input
            style={{
              borderWidth: 0,
              // borderRadius: '5px',
              width: '70%',
              height: '100%',
              // background: '#F7C17C',
              marginLeft: '3%',
              marginTop: '0%',
              // paddingLeft: '3%',
              // paddingRight: '3%',
              // paddingTop: '1.5%',
              // paddingBottom: '1.5%',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
            type="text"
            value={name}
            placeholder={'What do you Want  to...'}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            style={
              {
                // alignSelf: 'center',
                // justifyContent: 'center',
              }
            }
            className="nav-butn"
          >
            <text style={{}} className="nav-text">
              Search
            </text>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
