import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../App.css'
import Opps from '../404'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import { useSelector, useDispatch } from 'react-redux'
function Home() {
  const count = useSelector((state) => state.counter.value)
  // useEffect(() => {
  //   alert(count)
  // }, [])
  alert(count)
  if (count == 0) {
    return (
      <>
        <HeroSection />
      </>
    )
  } else {
    return (
      <>
        <Opps />
      </>
    )
  }
}

export default Home
