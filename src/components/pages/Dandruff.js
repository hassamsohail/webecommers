// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
// import '../App.css'
import '../../App.css'
import '../HeroSection.css'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'

import '../Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer'
function Dandruff() {
  const Dandruff = [
    {
      productName: 'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
      productOffPrice: '2,149',
      productOnPrice: '1,289',
      OffPrice: '860',
      productimg: '../images/1.PNG',
      Discription:
        "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl ’N’ Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
      video: '../images/vid.mp4',
    },
    {
      productName: 'Maybelline NY Baby Skin Instant Pore Eraser Primer ',
      productOffPrice: '1,99',
      productOnPrice: '839',
      OffPrice: '560',
      video: '../images/vid.mp4',

      productimg: '../images/2.PNG',
      Discription:
        'Maybelline Baby Skin Instant Pore Eraser Primer This makeup primer leaves skin with a baby smooth and matte finish. Moisturizes all day. How to apply/use  Step 1. Apply a thin layer to skin. Step 2. Can be worn with or without a moisturizer..',
    },
    {
      productName:
        'Maybelline NY The Falsies Lash Lift Waterproof Mascara - Very Black ',
      productOffPrice: '1,995',
      productOnPrice: '1,197',
      OffPrice: '798',
      video: '../images/vid.mp4',

      productimg: '../images/3.PNG',
      Discription:
        'Falsies Lash Lift Mascara Is A Lifting Mascara That Delivers Dramatic Length And Volume BENEFITS Get an instant lash lift effect from a mascara. Falsies Lash Lift mascara with fiber delivers dramatic volume and long, lifted lashes - a mascara that looks like false eyelashes! Our double curved lifting brush and fiber-infused formula grabs lashes at the root to lift, thicken, and lengthen. No clumps, smears, or flakes, just volume and the look of longer eyelashes that lasts all day..',
    },
    {
      productName: 'Maybelline NY BB Ultracover SPF 50 - 30ml',
      productOffPrice: '1,890',
      productOnPrice: '1,134',
      OffPrice: '756',
      video: '../images/vid.mp4',

      productimg: '../images/4.PNG',
      Discription:
        'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radiance…all Ultra covered..',
    },
  ]
  let history = useHistory()

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
  // console.log(SubArray)
  const ProductDetail = Dandruff.map((item) => (
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
    <div className="hero-container">
      <h2
        style={{
          fontSize: 40,
          textAlign: 'center',
        }}
      >
        Dandruff
      </h2>
      <div
        style={
          {
            // width: '100%',
            // height: '100%',
            // backgroundColor: 'pink',
            // flexDirection: 'row',
            // display: 'flex',
          }
        }
      >
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            marginTop: '2%',
            marginBottom: 100,
            width: '100%',
            // height: '34%',
            paddingLeft: '10%',
            paddingRight: '10%',
            // backgroundColor: 'blue',
          }}
        >
          {ProductDetail}
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Dandruff
