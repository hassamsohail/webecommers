// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../../App.css'
import '../HeroSection.css'
import YouTube from 'react-youtube'
import '../Navbar.css'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { FaItchIo } from 'react-icons/fa'
import SlidingPane from 'react-sliding-pane'
// import "react-sliding-pane"
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { render } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import Footer from '../Footer'
function Cart() {
  let history = useHistory()

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1)
  }
  const decrementCount = () => {
    // Update state with incremented value
    setCount(count - 1)
  }
  const [count, setCount] = React.useState(0)

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
  const location = useLocation()
  const ProductDiscount = location.state.productOffPrice
  const ProductName = location.state.productName

  const ProductPrice = location.state.productOnPrice
  const image = location.state.productimg

  const vedio = location.state.vedio
  const Discription = location.state.Discription

  // console.log(location)
  return (
    <div className="hero-container">
      <div
        style={{
          // borderBottomWidth: '1px',
          height: '1.5px',
          width: '100%',

          marginTop: '1%',
          marginBottom: '3%',
          backgroundColor: '#DADADA',
        }}
      ></div>

      <div
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '60%',
          display: 'flex',
          // backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '50%',
            // backgroundColor: 'pink',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <img
            // className="cards__item__img"
            // alt='Travel Image'
            style={{
              width: '67%',
              //   direction: 'flex',
              // jus

              //   marginLeft: '23%',
              height: '100%',
            }}
            src={image}
          />
        </div>

        <div
          style={{
            // marginLeft: '10%',
            width: '50%',
            // display: 'flex',

            // backgroundColor: 'blue',
          }}
        >
          <h2
            style={{
              fontSize: 35,
              color: 'black',
              width: '80%',
              fontWeight: 'bolder',
            }}
          >
            {ProductName}
          </h2>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              marginTop: '3%',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                fontWeight: 'bold',
                fontSize: 35,
                color: '#F7C17C',
              }}
            >
              Rs.{ProductPrice}
            </h2>
            <h2
              style={{
                fontSize: 23,
                color: '#000',
                marginLeft: '2%',
                textDecorationLine: 'line-through',
              }}
            >
              {ProductDiscount}
            </h2>
          </div>
          <div
            style={{
              // borderBottomWidth: '1px',
              height: '3px',
              width: '80%',
              marginTop: '4%',
              marginBottom: '2%',
              backgroundColor: '#F7C17C',
            }}
          ></div>

          <h2
            style={{
              fontSize: 18,
              marginBottom: '2%',

              color: 'black',
              //   marginLeft: '5%',
              //   textDecorationLine: 'line-through',
            }}
          >
            Qunatity
          </h2>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
            }}
          >
            <div
              className="boder"
              onClick={decrementCount}
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                // backgroundColor: 'pink',
                backgroundColor: '#F7C17C',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: 4,
                // borderColor: 'black',
              }}
            >
              <h2
                style={{
                  color: '#fff',
                }}
              >
                -
              </h2>
            </div>
            <h2
              style={{
                color: 'black',
                fontSize: 30,
                marginRight: 10,
              }}
            >
              {count}
            </h2>
            <div
              onClick={incrementCount}
              className="boder"
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                // backgroundColor: 'pink',
                backgroundColor: '#F7C17C',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: 4,
              }}
            >
              <h2
                style={{
                  color: '#fff',
                }}
              >
                +
              </h2>
            </div>
          </div>
          <div
            style={{
              // borderBottomWidth: '1px',
              height: '1px',
              width: '80%',
              marginTop: '1%',
              marginBottom: '2%',
              backgroundColor: '#F7C17C',
            }}
          ></div>
          <div
            onClick={() => {
              setState({ isPaneOpenLeft: true })
            }}
            style={{
              width: '80%',
              height: 40,
              borderRadius: 6,
              marginTop: '5%',

              backgroundColor: '#F7C17C',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                color: 'white',
                fontSize: 16,

                textAlign: 'center',
              }}
            >
              ADD TO CART
            </h2>
          </div>
          {/* <AddToCart /> */}
          <div
            style={{
              width: '80%',
              height: 40,
              marginTop: '2%',
              borderRadius: 6,

              backgroundColor: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                color: 'white',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              CHECK OUT
              {/* {myparam} */}
            </h2>
          </div>
        </div>
      </div>
      <text
        style={{
          fontWeight: 'bold',
          fontSize: 20,

          color: 'black',
          marginLeft: '10%',
        }}
      >
        Discription
      </text>
      <div
        style={{
          // borderBottomWidth: '1px',
          height: '1px',
          width: '80.5%',
          marginTop: '1%',
          marginBottom: '2%',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: '9%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}
      ></div>
      <h2
        style={{
          // fontWeight: 'bold',
          fontSize: 16,
          width: '80.5%',
          fontWeight: 'lighter',
          color: 'grey',
          marginLeft: '9%',
        }}
      >
        {Discription}
      </h2>

      <video
        style={{
          marginTop: '5%',
          marginLeft: '15%',
        }}
        width="1000"
        height="570"
        controls
      >
        <source src={'../images/vid.mp4'} type="video/mp4" />
      </video>
      <h2
        style={{
          fontWeight: 'bold',
          marginTop: '5%',
          fontSize: 30,
          color: 'black',
          marginLeft: '1.7%',
        }}
      >
        Custumer Review
      </h2>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          // paddingLeft: '20%',
          // marginTop: '10%',
        }}
      >
        <FaStar
          style={{
            // backgroundColor: '#754133',
            color: '#754133',
            marginLeft: '1.7%',
          }}
          size={25}
        />
        <FaStar
          style={{
            marginLeft: '2%',

            // backgroundColor: '#754133',
            color: '#754133',
          }}
          size={25}
        />
        <FaStar
          style={{
            marginLeft: '2%',

            // backgroundColor: '#754133',
            color: '#754133',
          }}
          size={25}
        />{' '}
        <FaStar
          style={{
            marginLeft: '2%',
            // backgroundColor: '#754133',
            color: '#754133',
          }}
          size={25}
        />{' '}
        <FaStarHalfAlt
          style={{
            marginLeft: '2%',
            // backgroundColor: '#754133',
            color: '#754133',
          }}
          size={25}
        />
        <text
          style={{
            justifyContent: 'center',
            display: 'flex',
            // textAlign: 'center',
            fontSize: 18,
            marginLeft: '2%',
            color: 'black',
            // textDecorationLine: 'line-through',
          }}
        >
          6 review
        </text>
      </div>
      <h2
        style={{
          // fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
          marginLeft: '1.7%',
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h2>
      <Footer />
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
          style={
            {
              // marginLeft: '70%',
            }
          }
        >
          <div
            style={{
              padding: 20,

              //   flexDirection: 'row',
              //   display: 'flex',
              // alignItems:
              //   display: 'flex',
              alignItems: 'center',
              //   justifyContent: 'center',
              width: '100%',
              height: '100%',
              //   backgroundColor: 'blue',
              //   backgroundColor: 'black',
            }}
          >
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                // alignItems:
                justifyContent: 'space-between',
                width: '100%',
                //   backgroundColor: 'black',
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

              <FaTimes
                onClick={() => setState({ isPaneOpenLeft: false })}
                size={35}
              />
              {/* </Link> */}
            </div>
            <div
              //   class="shadow-2"
              style={{
                webkitBoxShadow: '1px 3px 1px #9E9E9E',
                mozBoxShadow: '1px 3px 1px #9E9E9E',
                boxShadow: '1px 2px 9px #9E9E9E',
                width: '90%',
                marginTop: '10%',
                height: 130,
                marginLeft: '4%',
                // backgroundColor: 'pink',
                paddingTop: '5%',
                padding: '3%',
              }}
            >
              <div
                style={{
                  flexDirection: 'row',
                  display: 'flex',

                  // backgroundColor: 'pink',
                }}
              >
                <img
                  // className="cards__item__img"
                  // alt='Travel Image'
                  style={{
                    width: '20%',
                    height: '20%',
                  }}
                  src={image}
                />
                <div
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    height: '10%',

                    // backgroundColor: 'pink',
                  }}
                >
                  <h2
                    style={{
                      fontSize: 16,
                      color: 'black',
                      marginLeft: '2%',
                      height: 10,
                    }}
                  >
                    {ProductName}
                  </h2>
                  <FaTimes size={25} />
                </div>
              </div>
              <div
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                }}
              >
                <h2
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginLeft: '23%',
                    borderWidth: 1,
                    // borderColor: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {/* Maybelline Ny volumn Express The colossal washable maskara */}
                </h2>

                <h2
                  style={{
                    fontSize: 25,
                    color: '#F7C17C',
                    marginLeft: '8%',
                  }}
                >
                  RS. {ProductPrice}
                  {/* Maybelline Ny volumn Express The colossal washable maskara */}
                </h2>

                <h2
                  style={{
                    textDecorationLine: 'line-through',
                    fontSize: 16,
                    color: 'grey',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '5%',
                  }}
                >
                  {/* Maybelline Ny volumn Express The colossal washable maskara */}
                  RS.{ProductDiscount}
                </h2>
                <h2
                  style={{
                    color: 'black',
                    fontSize: 20,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                >
                  {count}
                </h2>
              </div>
            </div>
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                position: 'absolute',
                bottom: 6,
                width: '90%',
                justifyContent: 'space-between',
              }}
            >
              <div
                onClick={() => {
                  history.push('/info', {})
                }}
                style={{
                  width: '40%',
                  height: 40,
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F7C17C',
                  borderRadius: 10,
                }}
              >
                <FaItchIo
                  size={25}
                  style={{
                    marginRight: '7%',
                    color: 'white',
                  }}
                />
                <h2
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}
                >
                  Place Order
                </h2>
              </div>
              <div
                onClick={() => setState({ isPaneOpenLeft: false })}
                style={{
                  width: '40%',
                  height: 40,
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F7C17C',
                  borderRadius: 10,
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}
                >
                  Cancel
                </h2>
              </div>
            </div>
            <div
              //   class="shadow-2"
              style={{
                webkitBoxShadow: '1px 3px 1px #9E9E9E',
                mozBoxShadow: '1px 3px 1px #9E9E9E',
                boxShadow: '1px 2px 9px #9E9E9E',
                width: '80%',
                position: 'absolute',
                bottom: 80,
                marginTop: '10%',
                height: 170,
                // marginLeft: '4%',
                // backgroundColor: 'pink',
                paddingTop: '5%',
                padding: '3%',
              }}
            >
              <h2
                style={{
                  fontSize: 24,
                  color: 'black',
                }}
              >
                Order Summary
              </h2>
              <div
                style={{
                  // borderBottomWidth: '1px',
                  height: '1.5px',
                  width: '100%',
                  marginTop: '1%',
                  backgroundColor: 'black',
                }}
              ></div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  marginTop: '5%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    color: 'black',
                  }}
                >
                  Your Save
                </h2>
                <h2
                  style={{
                    fontSize: 18,
                    color: 'black',
                  }}
                >
                  Rs. {ProductDiscount}
                </h2>{' '}
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  marginTop: '5%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    color: 'black',
                  }}
                >
                  Grand Total
                </h2>
                <h2
                  style={{
                    fontSize: 18,
                    color: 'black',
                  }}
                >
                  Rs. {ProductPrice}
                </h2>{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <div>And I am pane content on left.</div> */}
      </SlidingPane>
    </div>
  )
}
export default Cart
