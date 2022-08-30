// import React from 'react'
import React, { useState, useEffect } from 'react'
// import sofa from '../images/sofa.png'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import './Navbar.css'
import { FaPlusCircle } from 'react-icons/fa'
// import firestore from '@react-native-firebase/firestore'
// import { useNavigate } from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'

function HeroSection({}) {
  const AAry = [
    {
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
  const ClickHandle = () => {
    // firestore()
    //   .collection('product')
    //   .get()
    //   .then((querySnapshot) => {
    //     console.log('Total users: ', querySnapshot.size)

    //     querySnapshot.forEach((documentSnapshot) => {
    //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data())
    //     })
    //   })
    // const usersCollection = firestore().collection('Users')
    // const userDocument = firestore().collection('Users').doc('ABC')
  }
  // const Product = [
  //   {
  //     id: 1,
  //     vedio: '/images/vid.mp4',

  //     src: '../images/Item1.png',
  //     // Image: '../images/sofa.png',
  //     // photo: sofa,
  //     ProductName: ' Mascara',
  //     ProductPrice: 'Rs25000',
  //     ProductDiscount: 'Rs5000',
  //     // ProductRating:""
  //   },
  //   {
  //     id: 1,

  //     vedio: '/images/vid.mp4',
  //     src: '../images/sofa.png',
  //     // Image: '../images/sofa.png',
  //     // photo: sofa,
  //     ProductName: "Woman's Makeup bag",
  //     ProductPrice: 'Rs25000',
  //     ProductDiscount: 'Rs5000',
  //     // ProductRating:""
  //   },
  //   {
  //     id: 1,

  //     src: '../images/sofa.png',
  //     // Image: '../images/sofa.png',
  //     // photo: sofa,
  //     ProductName: "Woman's Makeup bag",
  //     ProductPrice: 'Rs25000',
  //     ProductDiscount: 'Rs5000',
  //     vedio: '/images/vid.mp4',

  //     // ProductRating:""
  //   },
  //   {
  //     id: 1,

  //     src: '../images/sofa.png',
  //     // Image: '../images/sofa.png',
  //     // photo: sofa,
  //     ProductName: "Woman's Makeup bag",
  //     ProductPrice: 'Rs25000',
  //     ProductDiscount: 'Rs5000',
  //     vedio: '/images/vid.mp4',
  //     // ProductRating:""
  //   },
  // ]
  const AllData = AAry.map((item) => (
    // <div className="img-main">
    <div
      // onClick={() => history('/Cart')}
      // onClick={() => {
      //   history.push('/Brand', {
      //     TitleMain: item.title,
      //     SubArray: item.subarry,
      //   })

      onClick={ClickHandle}
      // }}
      style={{
        marginTop: '3%',
      }}
    >
      <img
        style={{
          width: '100%',
          height: '10%',
        }}
        src={item.img}
      />
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

  // const ProductDetail = Product.map((product) => (
  //   // <Link

  //   <div
  //     onClick={() => {
  //       history.push('/Cart', {
  //         ProductName: product.ProductName,
  //         ProductPrice: product.ProductPrice,
  //         ProductDiscount: product.ProductDiscount,
  //         image: product.src,
  //         vedio: product.vedio,
  //       })
  //     }}
  //     style={{
  //       // backgroundColor: 'pink',
  //       marginRight: '1%',
  //       width: '97%',
  //     }}
  //   >
  //     <div
  //       // onClick={nextPage}
  //       style={{
  //         width: '100%',
  //         height: 400,
  //         justifyContent: 'center',
  //         // display: 'flex',
  //         // backgroundColor: 'pink',
  //       }}
  //     >
  //       <text
  //         style={{
  //           color: '#fff',
  //           width: 50,
  //           paddingLeft: 3,
  //           position: 'absolute',
  //           // left: 0,
  //           backgroundColor: '#EB5345',
  //         }}
  //       >
  //         Sales
  //       </text>
  //       <text
  //         style={{
  //           color: '#fff',
  //           width: 50,
  //           paddingLeft: 3,
  //           position: 'absolute',
  //           // left: 0,
  //           marginTop: '2%',
  //           backgroundColor: '#08C0E4',
  //         }}
  //       >
  //         New
  //       </text>
  //       <img
  //         // className="cards__item__img"
  //         // alt='Travel Image'
  //         style={{
  //           width: '50%',
  //           marginLeft: '23%',
  //           height: '50%',
  //         }}
  //         src={product.src}
  //       />

  //       <div
  //         style={{
  //           height: '50%',
  //           width: '100%',
  //           backgroundColor: '#FDF1E2',
  //         }}
  //       >
  //         <text
  //           style={{
  //             justifyContent: 'center',
  //             display: 'flex',
  //             // textAlign: 'center',
  //             fontSize: 24,
  //             marginTop: '2%',

  //             color: 'black',
  //           }}
  //         >
  //           Maybelline NY Mascara
  //         </text>
  //         <div
  //           style={{
  //             flexDirection: 'row',
  //             display: 'flex',
  //             paddingLeft: '20%',
  //             marginTop: '10%',
  //           }}
  //         >
  //           <FaStar
  //             style={{
  //               // backgroundColor: '#754133',
  //               color: '#754133',
  //               marginLeft: '1%',
  //             }}
  //             size={25}
  //           />
  //           <FaStar
  //             style={{
  //               marginLeft: '2%',

  //               // backgroundColor: '#754133',
  //               color: '#754133',
  //             }}
  //             size={25}
  //           />{' '}
  //           <FaStar
  //             style={{
  //               marginLeft: '2%',

  //               // backgroundColor: '#754133',
  //               color: '#754133',
  //             }}
  //             size={25}
  //           />{' '}
  //           <FaStar
  //             style={{
  //               marginLeft: '2%',

  //               // backgroundColor: '#754133',
  //               color: '#754133',
  //             }}
  //             size={25}
  //           />{' '}
  //           <FaStarHalfAlt
  //             style={{
  //               marginLeft: '2%',
  //               // backgroundColor: '#754133',
  //               color: '#754133',
  //             }}
  //             size={25}
  //           />
  //           <text
  //             style={{
  //               justifyContent: 'center',
  //               display: 'flex',
  //               // textAlign: 'center',
  //               fontSize: 18,
  //               marginLeft: '2%',
  //               color: 'black',
  //               // textDecorationLine: 'line-through',
  //             }}
  //           >
  //             6 review
  //           </text>
  //         </div>
  //         <text
  //           style={{
  //             justifyContent: 'center',
  //             display: 'flex',
  //             // textAlign: 'center',
  //             fontSize: 18,
  //             color: 'red',
  //             marginTop: '4%',

  //             textDecorationLine: 'line-through',
  //           }}
  //         >
  //           {product.ProductDiscount}
  //         </text>

  //         <text
  //           style={{
  //             justifyContent: 'center',
  //             display: 'flex',
  //             // textAlign: 'center',
  //             fontSize: 28,
  //             color: 'black',
  //             marginTop: '4%',

  //             fontWeight: 'bold',
  //             // textDecorationLine: 'line-through',
  //           }}
  //         >
  //           {product.ProductPrice}
  //         </text>
  //       </div>
  //     </div>
  //   </div>
  // ))
  return (
    <div className="hero-container">
      {/* <ul
        style={{
          marginTop: '1%',
          // backgroundColor: '#f2f2f2',
          // padding: '10%',
        }}
        className={click ? 'nav-menu' : 'nav-menu'}
      >
        <li
          style={
            {
              // backgroundColor: 'red',
            }
          }
          className="nav-item"
        >
          <Link
            style={{
              color: 'black',
              // fontSize: '24px',
              // width: '100%',
              // marginLeft: '2%',
              // textSizeAdjust: '100%',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Categories
          </Link>
        </li>
        <li
          style={
            {
              // backgroundColor: 'red',
            }
          }
          className="nav-item"
        >
          <Link
            style={{
              color: 'black',
              // fontSize: '24px',
              // width: '100%',
              // marginLeft: '2%',
              // textSizeAdjust: '100%',
            }}
            to="/Brand"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Brands
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Make Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/Billing"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Skin Care
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Health Care
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Personal Care
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Baby Care
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: 'black',
            }}
            to="/"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Hair Care
          </Link>
        </li>
      </ul> */}
      {/* <div
        style={{
          // borderBottomWidth: '1px',
          height: '1.5px',
          width: '100%',
          marginTop: '1%',
          backgroundColor: '#DADADA',
        }}
      ></div> */}
      <div className="img-main">
        {AllData}

        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            // width: '100%',
          }}
        >
          <div
            // onClick={() => navi('/Cart')}
            style={{
              marginTop: '3%',
              // height: '20%',
              // width: '10%',
            }}
          >
            <img
              style={{
                width: '97%',
                height: '100%',
              }}
              src={'../images/immg1.png'}
            />
          </div>

          <div
            // onClick={() => navi('/Cart')}
            style={{
              marginTop: '3%',
              // height: '20%',
              // width: '10%',
            }}
          >
            <img
              style={{
                width: '97%',
                height: '100%',
              }}
              src={'../images/immg2.png'}
            />
          </div>
          <div
            // onClick={() => navi('/Cart')}
            style={{
              marginTop: '3%',
              // height: '20%',
              // width: '10%',
            }}
          >
            <img
              style={{
                width: '97%',
                height: '100%',
              }}
              src={'../images/immg3.png'}
            />
          </div>
          <div
            // onClick={() => navi('/Cart')}
            style={{
              marginTop: '3%',
              // height: '20%',
              // width: '10%',
            }}
          >
            <img
              style={{
                width: '97%',
                height: '100%',
              }}
              src={'../images/immg4.png'}
            />
          </div>
        </div>
      </div>

      <div
        // onClick={() => navi('/Cart')}
        style={{
          marginTop: '3%',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '10%',
          }}
          src={'../images/imgg10.png'}
        />
      </div>
      <div
        className="img-main"
        // onClick={() => navi('/Cart')}
        style={{
          marginTop: '3%',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '10%',
          }}
          src={'../images/imgg11.png'}
        />
      </div>
      <Footer />
    </div>
  )
}
export default HeroSection
