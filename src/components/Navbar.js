import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai'

import { AiOutlineCaretDown } from 'react-icons/ai'
import { FaDollyFlatbed } from 'react-icons/fa'

import { FaRegUser } from 'react-icons/fa'

import { FaItchIo } from 'react-icons/fa'
import SlidingPane from 'react-sliding-pane'
// import "react-sliding-pane"
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { render } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
// import { AiOutlineSearch } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

function Navbar() {
  const ary = [
    {
      title1: 'brand',
      subtitle1: 'Essence ',
      subtitle2: ' Maybelline New York',
      subtitle3: 'Nyx Professional Makeup',
      img: '../images/imgg1.png',
      // width:
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
    {
      title1: 'Make Up',
      subtitle1: 'Eyes shadow',
      subtitle2: 'Eye Brow',
      subtitle3: 'Eye Primer',
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
    {
      title1: 'Skin Care',
      subtitle1: 'Dryness',
      subtitle2: 'Pores',
      subtitle3: 'Face Oils',
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
    {
      title1: 'Hair Care',
      subtitle1: ' hair fall',
      subtitle2: 'hair density ',
      subtitle3: 'hair Oils',
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
    {
      title1: 'Health Care',
      subtitle1: 'Nails & skin ',
      subtitle2: 'Brain & Memory ',
      subtitle3: 'Energy Booster',
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
    {
      title1: 'Personal Care',
      subtitle1: 'Men Perfums ',
      subtitle2: 'Women Perfums',
      subtitle3: 'Shavers',
      title: 'Maybelline New York',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl āNā Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
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
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radianceā¦all Ultra covered..',
        },
      ],
    },
  ]
  let history = useHistory()

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
  const ProductCatagories = ary.map((item) => (
    <div class="dropdown">
      <button
        class="dropbtn"
        style={{
          width: 140,
          flexDirection: 'row',
          color: '#fff',
        }}
      >
        {item.title1}
      </button>

      <div class="dropdown-content">
        <a
          onClick={() => {
            history.push('/Brand', {
              TitleMain: item.title,
              SubArray: item.subarry,
            })
          }}
          style={{
            color: '#000',
          }}
          // href="/Brand"
        >
          {item.subtitle1}
        </a>
        <a
          onClick={() => {
            history.push('/Brand', {
              TitleMain: item.title,
              SubArray: item.subarry,
            })
          }}
        >
          {item.subtitle2}
        </a>
        <a
          onClick={() => {
            history.push('/Brand', {
              TitleMain: item.title,
              SubArray: item.subarry,
            })
          }}
        >
          {item.subtitle3}
        </a>
      </div>
    </div>
  ))

  return (
    <>
      <nav
        style={{
          backgroundColor: '#262523',
        }}
        className="navbar"
      >
        <div className="navbar-container">
          <Link to="/Home">
            <img
              // className="cards__item__img"
              // alt='Travel Image'
              style={{
                width: '80px',
                height: '80px',
              }}
              src={'../images/Logo.png'}
            />
          </Link>

          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>

        <div
          style={{
            width: '15%',
          }}
        />
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            Brands
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/Essence', {})
              }}
              style={{
                color: '#000',
              }}
            >
              Essence
            </a>
            <a
              onClick={() => {
                history.push('/Janssen', {})
              }}
            >
              Janssen
            </a>
            <a
              onClick={() => {
                history.push('/Nutrifactor', {})
              }}
            >
              Nutrifactor
            </a>
            <a
              onClick={() => {
                history.push('/Haseeb', {})
              }}
            >
              Hasseb
            </a>
          </div>
        </div>

        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            MakeUp
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/LipStick', {})
              }}
              style={{
                color: '#000',
              }}
            >
              LipStick
            </a>
            x
            <a
              onClick={() => {
                history.push('/Blush', {})
              }}
            >
              Blush
            </a>
            <a
              onClick={() => {
                history.push('/Eyeliner', {})
              }}
            >
              Eyeliner
            </a>
          </div>
        </div>

        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            Skin Care
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/FaceWash', {})
              }}
              style={{
                color: '#000',
              }}
            >
              FaceWash
            </a>
            <a
              onClick={() => {
                history.push('/FaceMask', {})
              }}
            >
              FaceMask
            </a>
            <a
              onClick={() => {
                history.push('/DarkSpots', {})
              }}
            >
              DarkSpots
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            Hair Care
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/HairOils', {})
              }}
              style={{
                color: '#000',
              }}
            >
              HairOils
            </a>
            <a
              onClick={() => {
                history.push('/Hairfall', {})
              }}
            >
              Hairfall
            </a>
            <a
              onClick={() => {
                history.push('/Dandruff', {})
              }}
            >
              Dandruff
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            Health Care
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/ManEnergyBooster', {})
              }}
              style={{
                color: '#000',
              }}
            >
              Man Energy Booster
            </a>
            <a
              onClick={() => {
                history.push('/EnergyBooster', {})
              }}
            >
              Energy Booster
            </a>

            <a
              onClick={() => {
                history.push('/WomenEnergyBooster', {})
              }}
            >
              Women Energy Booster
            </a>
          </div>
        </div>
        <div class="dropdown">
          <button
            class="dropbtn"
            style={{
              width: 140,
              flexDirection: 'row',
              color: '#fff',
            }}
          >
            Personal Care
          </button>

          <div class="dropdown-content">
            <a
              onClick={() => {
                history.push('/HairRemoval', {})
              }}
              style={{
                color: '#000',
              }}
            >
              Hair Removal cream
            </a>

            <a
              onClick={() => {
                history.push('/Depilatory', {})
              }}
            >
              Depilatory
            </a>
          </div>
        </div>

        <Link to="/UserPanel">
          <FaRegUser
            style={{
              color: '#fff',

              // color: '#F7C17C',
              marginLeft: '30%',
            }}
            size={20}
          />
        </Link>
        {/* <div
          
        >


        </div> */}
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: '#f7c17c',
            borderRadius: 6,
            display: 'flex',
            marginLeft: '4%',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          Sigin Out
        </button>
      </nav>
      <div>
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
                // marginTop: '20%',
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
                  <FaTimes
                    onClick={() => setState({ isPaneOpenLeft: false })}
                    size={35}
                  />
                </Link>
              </div>
              <h2
                style={{
                  fontSize: 30,
                  color: 'black',
                  width: '100%',
                  marginTop: '15%',

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
                We found , everything you need to support healthy oral care
                habit for life.
              </h2>

              <div
                onClick={() => setState({ isPaneOpenLeft: false })}
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

                  <h2
                    style={{
                      fontSize: 20,
                      color: 'white',
                    }}
                  >
                    Shop Now
                  </h2>
                  {/* </li> */}
                </div>
              </div>
            </div>
            {/* <div>And I am pane content on left.</div> */}
          </SlidingPane>
        </div>
      </div>
    </>
  )
}

export default Navbar
