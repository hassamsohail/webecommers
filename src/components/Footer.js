import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div
        // className="SubView"
        style={{
          flexDirection: 'row',
          // backgroundColor: 'pink',
          // justify-content: center;
          // alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <text
          className="text"
          style={{
            // alignSelf: 'center',
            marginRight: '4%',
            // backgroundColor: 'pink',
          }}
        >
          About MsCosmetics
        </text>
        <text
          className="text"
          style={{
            marginRight: '4%',
          }}
        >
          FAQ
        </text>

        <text
          className="text"
          style={{
            marginRight: '4%',
            // width: '20%',
          }}
        >
          Return & Replacement Policy
        </text>

        <text
          className="text"
          style={{
            marginRight: '4%',
            // width: '20%',
          }}
        >
          Sign In
        </text>

        <text
          className="text"
          style={{
            marginRight: '4%',
            // width: '20%',
          }}
        >
          Sign Up
        </text>
      </div>
    </div>
  )
}

export default Footer
