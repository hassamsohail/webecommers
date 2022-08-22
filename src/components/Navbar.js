import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'

import { FaRegUser } from 'react-icons/fa'
import { FaDollyFlatbed } from 'react-icons/fa'

import { FaRegHeart } from 'react-icons/fa'
function Navbar() {
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
          <Link to="/Login">
            <FaDollyFlatbed
              style={{
                color: '#F7C17C',
                marginLeft: '1%',
              }}
              size={40}
            />
          </Link>
        </li>
      </nav>
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
