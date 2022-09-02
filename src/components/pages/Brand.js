// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
// import '../App.css'
import '../../App.css'
import '../HeroSection.css'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import FlatList from 'flatlist-react'
import '../Navbar.css'
import { AiFillPlusSquare } from 'react-icons/ai'

import { useHistory } from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar'
function Brand() {
  let history = useHistory()
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })

  const [ProductName1, setProductName1] = useState('')
  const [ProductDiscount, setProductDiscount] = useState('')
  const [ProductPrice, setProductPrice] = useState('')
  const [ProductOff, setProductOff] = useState('')
  // const [Discription, setDiscription] = useState('')

  const location = useLocation()
  const TitleMain = location.state.TitleMain
  const ProductName = location.state.ProductName
  const SubArray = location.state.SubArray
  const Discription = location.state.Discription
  // const image = location.state.image

  const vedio = location.state.vedio

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [name, setName] = useState('')
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const Render = (item) => {
    return (
      <div
        // onClick={() => {
        //   history.push('/Cart', {
        //     productimg: item.productimg,
        //     productName: item.productName,
        //     productOffPrice: item.productOffPrice,
        //     productOnPrice: item.productOnPrice,
        //     Discription: item.Discription,
        //     vedio: item.vedio,
        //   })
        // }}
        style={{
          // marginRight: '1%',
          // backgroundColor: 'pink',
          // marginRight: 40,
          height: 410,
          // height: 100,
          width: 340,
        }}
      >
        <img
          style={{
            width: '100%',
            height: '70%',
          }}
          src={item.productimg}
        />

        <text
          style={{
            fontSize: 16,
            height: 20,
            width: '100%',
            // backgroundColor: 'pink',
          }}
        >
          {item.productName}
        </text>
        <div
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12,
            display: 'flex',
          }}
        >
          <text
            style={{
              fontSize: 13,
              marginRight: 10,
              textDecorationLine: 'line-through',
              color: 'grey',
            }}
          >
            Rs.{item.productOffPrice}
          </text>
          <text
            style={{
              color: 'red',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            Rs.{item.productOnPrice}
          </text>
        </div>

        <div
          style={{
            marginTop: '7%',

            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F7C17C',
            height: 40,
            borderRadius: 10,
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <text
            style={{
              marginRight: 10,
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Remove Items
          </text>
          {/* <AiOutlineShoppingCart size={20} color={'#fff'} /> */}
        </div>
      </div>
    )
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
  console.log(SubArray)
  window.addEventListener('resize', showButton)
  console.log(SubArray)
  const ProductDetail = SubArray.map((item) => (
    <div
      onClick={() => {
        history.push('/Cart', {
          productimg: item.productimg,
          productName: item.productName,
          productOffPrice: item.productOffPrice,
          productOnPrice: item.productOnPrice,
          Discription: item.Discription,
          vedio: item.vedio,
        })
      }}
      style={{
        // marginRight: '1%',
        // backgroundColor: 'pink',
        marginRight: 40,
        height: 410,
        width: 340,
      }}
    >
      <img
        style={{
          width: '100%',
          height: '70%',
        }}
        src={item.productimg}
      />

      <text
        style={{
          fontSize: 16,
        }}
      >
        {item.productName}
      </text>
      <div
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          marginTop: 12,
          display: 'flex',
        }}
      >
        <text
          style={{
            fontSize: 13,
            marginRight: 10,
            textDecorationLine: 'line-through',
            color: 'grey',
          }}
        >
          Rs.{item.productOffPrice}
        </text>
        <text
          style={{
            color: 'red',
            fontSize: 17,
            fontWeight: 'bold',
          }}
        >
          Rs.{item.productOnPrice}
        </text>
      </div>

      <div
        style={{
          marginTop: '7%',

          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7C17C',
          height: 40,
          borderRadius: 10,
          flexDirection: 'row',
          display: 'flex',
        }}
      >
        <text
          style={{
            marginRight: 10,
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          ADD TO CART
        </text>
        <AiOutlineShoppingCart size={20} color={'#fff'} />
      </div>
    </div>
  ))
  return (
    <div>
      <Navbar />
      <div className="hero-container">
        {/* <h2
        style={{
          fontSize: 40,
          textAlign: 'center',
        }}
      >
        {TitleMain}
      </h2> */}
        {/* <div style={{}}>
        <div
          style={{
            // flexDirection: 'row',
            display: 'flex',

            marginTop: '2%',
            marginBottom: 100,
            width: '100%',
            height: '100%',
            paddingLeft: '10%',
            paddingRight: '10%',
            // backgroundColor: 'blue',
          }}
        >
          {ProductDetail}
        </div>
      </div> */}
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 100,
          }}
        >
          <FlatList
            style={
              {
                // marginRight: '5%',
              }
            }
            list={SubArray}
            display={{
              grid: true,
              // minColumnWidth: '10px',
              gridGap: '150px',
            }}
            renderItem={Render}
          />
          <AiFillPlusSquare
            onClick={() => setState({ isPaneOpenLeft: true })}
            style={{
              color: '#f7c17c',
              // width: 200,
              // height: 100,
            }}
            size={150}
          />
        </div>
      </div>
      <SlidingPane
        // closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isPaneOpenLeft}
        // title="Hey, it is optional pane title.  I can be React component too."
        from="top"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div
          style={{
            // backgroundColor: 'pink',

            width: '100%',
            height: '100%',
          }}
        >
          <h1
            style={{
              fontSize: 40,
              fontWeight: 'bold',
            }}
          >
            ADD PRODUCT
          </h1>
          <form
            style={{
              paddingLeft: 99,
            }}
          >
            <label>
              {/* Enter your Email: */}
              Enter the Product Name
              <input
                type="text"
                value={ProductName1}
                style={{
                  width: '39%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={'Enter the Product Name'}
                onChange={(e) => setProductName1(e.target.value)}
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
              Enter Product Discount
              <input
                type="text"
                value={ProductDiscount}
                style={{
                  width: '39%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={'Enter Product Discount'}
                onChange={(e) => setProductDiscount(e.target.value)}
              />
            </label>
          </form>
          <form
            style={{
              paddingLeft: 130,
              marginTop: '1%',
            }}
          >
            <label>
              {/* Enter First Name */}
              Enter Product Price
              <input
                type="text"
                value={ProductPrice}
                style={{
                  width: '40%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={' Enter Product Price'}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </label>
          </form>
          <form
            style={{
              paddingLeft: 148,
              marginTop: '1%',
            }}
          >
            <label>
              {/* Enter Last Name */}
              Enter Product Off
              <input
                type="text"
                value={ProductOff}
                style={{
                  width: '40%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={' Enter Product Off'}
                onChange={(e) => setProductOff(e.target.value)}
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
              onClick={() => setState({ isPaneOpenLeft: false })}
              style={{
                height: 50,
                width: 120,
                marginTop: '4%',
                marginLeft: '9%',
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
                Add New
              </text>
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  )
}
export default Brand
