import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Footer() {
  let history = useHistory()

  return (
    <div className="footer-container">
      <div
        // className="SubView"
        style={{
          flexDirection: 'row',
          marginBottom: '2%',
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
          onClick={() => {
            history.push('/Login', {
              // TitleMain: item.title,
              // SubArray: item.subarry,
            })
          }}
          className="text"
          style={{
            marginRight: '4%',
            // width: '20%',
          }}
        >
          Log In
        </text>

        <text
          onClick={() => {
            history.push('/Create', {
              // TitleMain: item.title,
              // SubArray: item.subarry,
            })
          }}
          className="text"
          style={{
            marginRight: '4%',
            // width: '20%',
          }}
        >
          Sign Up
        </text>
      </div>
      <text
        style={{
          fontSize: 20,
          color: '#f7c17c',
          textAlign: 'center',
          // display: 'flex',
          marginLeft: '40%',
          marginTop: '5%',
        }}
      >
        Place The Order & Never Miss A Sale
      </text>
      <div
        style={{
          // borderBottomWidth: '1px',
          height: '1.5px',
          width: '20%',
          marginLeft: '40%',

          justifyContent: 'center',
          display: 'flex',
          marginTop: '1%',
          marginBottom: '1%',
          backgroundColor: '#f7c17c',
        }}
      ></div>
      <text
        style={{
          fontSize: 12,
          color: '#000',
          textAlign: 'center',
          // display: 'flex',
          marginLeft: '40%',
          marginTop: 10,
          width: 700,
        }}
      >
        {/* copyright © Ms Cosmetics 2022. */}
        Please Contact 18134156-001@uog.edu.pk from +923166891604 {'\t\t\t\n'}
      </text>
      <text
        style={{
          fontSize: 12,
          color: '#000',
          textAlign: 'center',
          // display: 'flex',
          marginLeft: '40%',
          marginTop: 10,
          width: 700,
        }}
      >
        {/* copyright © Ms Cosmetics 2022. */}
        Please Contact 18134156-044@uog.edu.pk from +923113322552 {'\t\t\t\n'}
      </text>
      <text
        style={{
          fontSize: 12,
          color: '#000',
          textAlign: 'center',
          // display: 'flex',
          marginLeft: '40%',
          marginTop: 10,
          width: 700,
        }}
      >
        {/* copyright © Ms Cosmetics 2022. */}
        Please Contact 18134156-045@uog.edu.pk from +923107630757 {'\t\t\t\n'}
      </text>

      <text
        style={{
          fontSize: 12,
          color: '#000',
          textAlign: 'center',
          // display: 'flex',
          // marginLeft: '40%',
          marginTop: 10,
        }}
      >
        {/* copyright © Ms Cosmetics 2022. */}
        {/* All your information are protected and belong to privacy notice.
         */}
      </text>
      <text
        style={{
          fontSize: 16,
          color: '#f7c17c',
          textAlign: 'center',
          // display: 'flex',
          marginLeft: '41%',
          marginTop: 10,
        }}
      >
        copyright © Ms Cosmetics 2022.
      </text>
    </div>
  )
}

export default Footer
