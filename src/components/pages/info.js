import React, { useState } from 'react'
import Footer from '../Footer'

export default function info() {
  const [Email, setEmail] = useState('')
  const [Country, setCountry] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Address, setAddress] = useState('')
  const [CityName, setCityName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <h1
        style={{
          fontSize: 40,
          marginLeft: '10%',
        }}
      >
        Ms Cosmentic
      </h1>

      <form
        style={{
          paddingLeft: 103,
        }}
      >
        <label>
          {/* Enter your Email: */}
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
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter Country Name */}
          <input
            type="text"
            value={Country}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={'Enter Country Name'}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </form>
      <form
        style={{
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter First Name */}
          <input
            type="text"
            value={FirstName}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={' Enter First Name'}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </form>
      <form
        style={{
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter Last Name */}
          <input
            type="text"
            value={LastName}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={' Enter Last Name'}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </form>
      <form
        style={{
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter Address */}
          <input
            type="text"
            value={Address}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={' Enter Address'}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </form>
      <form
        style={{
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter City Name */}
          <input
            type="text"
            value={CityName}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={' Enter City Name'}
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>
      </form>
      <form
        style={{
          paddingLeft: 103,
          marginTop: '1%',
        }}
      >
        <label>
          {/* Enter Phone Number */}
          <input
            type="text"
            value={PhoneNumber}
            style={{
              width: '39%',
              paddingLeft: '1%',
              height: 40,
              marginLeft: '4%',
              // backgroundColor: 'pink',
            }}
            placeholder={' Enter Phone Number'}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
      </form>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
        }}
      >
        <div
          style={{
            height: 50,
            width: 120,
            marginTop: '4%',
            marginLeft: '10%',
            borderRadius: 16,
            backgroundColor: 'Lightgrey',
            alignItems: 'center',
            marginRight: '10%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <text
            style={{
              fontWeight: 20,
              color: '#fff',
            }}
          >
            Back to Cart
          </text>
        </div>
        <div
          style={{
            height: 50,
            width: 120,
            marginTop: '4%',
            marginLeft: '12%',
            borderRadius: 16,
            backgroundColor: '#f7c17c',
            alignItems: 'center',
            marginRight: '10%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <text
            style={{
              fontWeight: 20,
              color: '#fff',
            }}
          >
            Order Now
          </text>
        </div>
      </div>
      <Footer />
    </div>
  )
}
