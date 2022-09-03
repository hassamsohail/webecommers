// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import './Navbar.css'
// import { FlatList } from 'react-native'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import SlidingPane from 'react-sliding-pane'

import { Link, Route, Routes } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function HeroSection({}) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  })
  const AAry = [
    {
      //Main big Image
      img: '../images/imgg1.png',
      // width:
      title: 'Maybelline New York',

      //sub Array Of Product
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl ’N’ Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
          video: '../images/vid.mp4',
        },
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl ’N’ Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
          video: '../images/vid.mp4',
        },
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../images/1.PNG',
          Discription:
            "Now big volume meets bouncy curl. Colossal Curl Bounce mascara turns up the volume and curls up every lash without clumps. Up to 24HR wear. Colossal Curl Bounce turns up the volume. Now big volume meets bouncy curl. Its Curl ’N’ Bounce brush separates and curls lashes while its Memory-Curl formula gives curl that lasts. This long wearing mascara delivers lasting bouncy lashes. Defies clumps. Defies smudging. Defies flaking. Up to 24HR wear. For best results, hold Maybelline Colossal Curl Bounce's brush against lashes and extend from root to tip repeatedly in an upwards motion until desired volume and curl is achieved.",
          video: '../images/vid.mp4',
        },
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
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
          productName:
            'Maybelline NY BB Ultracoverskjid  js dhvcjsdyus SPF 50 - 30ml',
          productOffPrice: '1,890',
          productOnPrice: '1,134',
          OffPrice: '756',
          video: '../images/vid.mp4',

          productimg: '../images/4.PNG',
          Discription:
            'The New Super BB Ultra cover banishes your flaws in one swipe with SPF 50 for super UA protention. Dark spots & Circles, Pores, Fine Lines, Redness, Acne Marks, Skin Dullness, Unevenness & lack of radiance…all Ultra covered..',
        },
      ],
    },
    {
      //Main big Image
      img: '../images/imgg11.png',
      // width:
      title: 'Lipstick',

      //sub Array Of Product
      subarry: [
        {
          productName: 'Maybelline NY Colossal Curl ',
          productOffPrice: '2,149',
          productOnPrice: '1,289',
          OffPrice: '860',
          productimg: '../LipStick/LipStick1.PNG',
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
      ],
    },
    {
      //Main big Image
      img: '../images/imgg5.png',
      // width:
      title: 'Maybelline ',

      //sub Array Of Product
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
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
      ],
    },
    {
      img: '../images/imgg2.png',
      // width:
      title: 'FLASH WEEKEND SALE ',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
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
          productOffPrice: '1,990',
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
      ],
    },

    {
      img: '../images/imgg3.png',
      // width:
      title: 'THE ORDINARY SERUMS - SALE',
      subarry: [
        {
          productName:
            'Maybelline NY Colossal Curl Bounce Mascara - Very Black ',
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
      ],
    },
    {
      img: '../images/imgg4.png',
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
      ],
    },
    {
      img: '../images/imgg5.png',
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
      ],
    },
    {
      img: '../images/imgg6.png',
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
      ],
    },
    {
      img: '../images/imgg7.png',
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
      ],
    },
    {
      img: '../images/imgg8.png',
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
      ],
    },
    {
      img: '../images/imgg9.png',
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
      ],
    },
  ]
  // const history = useNavigate()
  // const nextPage = (e) => {
  //   e.preventDefault()
  //   history('/Cart',{
  // })
  const [AllDocs, setAllDocs] = useState([])
  let history = useHistory()
  const [ProductName, setProductName] = useState('')
  const [ProductDiscount, setProductDiscount] = useState('')
  const [ProductPrice, setProductPrice] = useState('')
  const [ProductOff, setProductOff] = useState('')
  const [Discription, setDiscription] = useState('')

  const AllData = AAry.map((item) => (
    // <div className="img-main">
    <div>
      <AiOutlineClose size={40} />
      <div
        // onClick={() => history('/Cart')}
        onClick={() => {
          history.push('/Brand', {
            TitleMain: item.title,
            SubArray: item.subarry,
          })

          // onClick={ClickHandle}
        }}
        style={
          {
            // marginTop: '3%',
          }
        }
      >
        <img
          style={{
            width: '100%',
            height: '10%',
          }}
          src={item.img}
        />
      </div>
    </div>
    // </div>
  ))

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
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
    <div>
      <Navbar />
      <div className="hero-container">
        <div className="img-main">{AllData}</div>
        <div
          onClick={() => setState({ isPaneOpenLeft: true })}
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingBottom: '3%',
          }}
        >
          <div
            className="border-Width"
            style={{
              // justifySelf: 'center',
              marginBottom: '5%',
              marginTop: '3%',
              // paddingBottom: '5%',
              backgroundColor: '#fff',
              boxShadow: '4px 7px 20px #f7c17c',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20%',
            }}
          >
            <AiFillPlusSquare
              style={{
                color: '#f7c17c',
                // width: 200,
                // height: 100,
              }}
              size={150}
            />
          </div>
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
                value={ProductName}
                style={{
                  width: '39%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={'Enter the Product Name'}
                onChange={(e) => setProductName(e.target.value)}
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
          <form
            style={{
              paddingLeft: 124,
              marginTop: '1%',
            }}
          >
            <label>
              {/* Enter Last Name */}
              Enter The Discription
              <input
                type="text"
                value={Discription}
                style={{
                  width: '39%',
                  paddingLeft: '1%',
                  height: 40,
                  marginLeft: '4%',
                  // backgroundColor: 'pink',
                }}
                placeholder={' Enter The Discription'}
                onChange={(e) => setDiscription(e.target.value)}
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
export default HeroSection
