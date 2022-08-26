import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'

import { FaRegUser } from 'react-icons/fa'
import { FaDollyFlatbed } from 'react-icons/fa'

import { FaItchIo } from 'react-icons/fa'
import SlidingPane from 'react-sliding-pane'
// import "react-sliding-pane"
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { render } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [name, setName] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })
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
        <div
          style={{
            width: '45%',
          }}
        />
        <li>
          <Link to="/Login">
            <FaRegHeart
              style={{
                color: '#F7C17C',
                marginLeft: '300%',
              }}
              size={40}
            />
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <FaRegUser
              style={{
                color: '#F7C17C',
                marginLeft: '1%',
              }}
              size={40}
            />
          </Link>
        </li>
        <li>
          <Link>
            <FaDollyFlatbed
              onClick={() => setState({ isPaneOpenLeft: true })}
              style={{
                color: '#F7C17C',
                marginLeft: '1%',
              }}
              size={40}
            />
          </Link>
        </li>
      </nav>
      <div>
        <SlidingPane
          // closeIcon={<div>Some div containing custom close icon.</div>}
          isOpen={state.isPaneOpenLeft}
          // title="Hey, it is optional pane title.  I can be React component too."
          from="right"
          // title={false}
          hideHeader={true}
          width="700px"
          onRequestClose={() => setState({ isPaneOpenLeft: false })}
        >
          <div
            // className="hero-container"
            style={{
              marginTop: '20%',
              width: '100%',
              padding: 20,
              // marginLeft: '60%',
            }}
          >
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                // alignItems:
                justifyContent: 'space-between',
                width: '100%',
                // backgroundColor: 'black',
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
              <Link
                to="/"
                style={{
                  // backgroundColor: 'black',
                  color: 'black',
                  // width: '100%',
                }}
              >
                <FaTimes size={35} />
              </Link>
            </div>
            <h2
              style={{
                fontSize: 30,
                color: 'black',
                width: '100%',
                marginTop: '30%',

                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              Your Cart is Currently Empty
            </h2>
            <h2
              style={{
                fontSize: 20,
                color: 'black',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                marginTop: '3%',
              }}
            >
              We found , everything you need to support healthy oral care habit
              for life.
            </h2>

            <div
              style={{
                //   fontSize: 30,
                //   color: 'black',
                width: '100%',
                marginTop: '3%',

                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <div
                style={{
                  height: 50,
                  width: '50%',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#754133',
                }}
              >
                <FaItchIo
                  size={30}
                  style={{
                    marginRight: '7%',
                    color: 'white',
                  }}
                />
                {/* <li> */}
                <Link
                  to="/"
                  // className="nav-links"
                  // onClick={closeMobileMenu}
                >
                  <h2
                    style={{
                      fontSize: 20,
                      color: 'white',
                    }}
                  >
                    Shop Now
                  </h2>
                </Link>
                {/* </li> */}
              </div>
            </div>
          </div>
          {/* <div>And I am pane content on left.</div> */}
        </SlidingPane>
      </div>
    </>
  )
}

export default Navbar

// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/services'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/products'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
