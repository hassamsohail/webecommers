import React, { useState } from 'react'
import logo from '.././components/Logo.png'
import Navbar from './Navbar'
export default function UserPanel() {
  const [Email, setEmail] = useState('')

  return (
    <div>
      <Navbar />

      <div
        style={{
          // flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'pink',
          display: 'flex',
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

      <form
        style={{
          paddingLeft: '25%',
          marginTop: '5%',
        }}
      >
        <label>
          Enter your Username:
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
            placeholder={'Username'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}
