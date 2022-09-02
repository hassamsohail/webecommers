import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'

import Brand from './components/pages/Brand'
import Cart from './components/pages/Cart'
import Addcart from './components/pages/Addcart'
import Addcart2 from './components/pages/Addcart2'
import Create from './components/pages/Create'
import info from './components/pages/info'
import Blush from './components/pages/Blush'
import Dandruff from './components/pages/Dandruff'
import DarkSpots from './components/pages/DarkSpots'
import Depilatory from './components/pages/Depilatory'
import Dove from './components/pages/Nutrifactor'
import EnergyBooster from './components/pages/EnergyBooster'
import ManEnergyBooster from './components/pages/ManEnergyBooster'
import WomenEnergyBooster from './components/pages/WomenEnergyBooster'
import Essence from './components/pages/Essence'
import Eyeliner from './components/pages/Eyeliner'
import FaceMask from './components/pages/FaceMask'
import FaceWash from './components/pages/FaceWash'
import Hairfall from './components/pages/Hairfall'
import HairOils from './components/pages/HairOils'
import Janssen from './components/pages/Janssen'
import LipStick from './components/pages/LipStick'
import VaginalCare from './components/pages/VaginalCare'
import WaxStrips from './components/pages/WaxStrips'
import Nutrifactor from './components/pages/Nutrifactor'
import HairRemoval from './components/pages/HairRemoval'
import Haseeb from './components/Haseeb'
import Lipstick2 from './components/pages/Lipstick2'
import Login from './components/pages/Login'
import UserPanel from './components/UserPanel'
import Opps from './components/404'
function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" exact component={Login} />
        {/* <Switch> */}
        <Route path="/Home" component={Home} />
        <Route path="/Brand" component={Brand} />
        <Route path="/Cart" component={Cart} />

        <Route path="/Addcart" component={Addcart} />
        <Route path="/Addcart2" component={Addcart2} />
        <Route path="/Create" component={Create} />
        <Route path="/info" component={info} />
        <Route path="/Blush" component={Blush} />
        <Route path="/Dandruff" component={Dandruff} />
        <Route path="/DarkSpots" component={DarkSpots} />
        <Route path="/Depilatory" component={Depilatory} />
        <Route path="/Nutrifactor" component={Nutrifactor} />
        <Route path="/EnergyBooster" component={EnergyBooster} />
        <Route path="/ManEnergyBooster" component={ManEnergyBooster} />
        <Route path="/WomenEnergyBooster" component={WomenEnergyBooster} />
        <Route path="/Essence" component={Essence} />
        <Route path="/Eyeliner" component={Eyeliner} />
        <Route path="/FaceMask" component={FaceMask} />
        <Route path="/FaceWash" component={FaceWash} />
        <Route path="/Hairfall" component={Hairfall} />
        <Route path="/HairOils" component={HairOils} />
        <Route path="/Janssen" component={Janssen} />
        <Route path="/LipStick" component={LipStick} />
        <Route path="/VaginalCare" component={VaginalCare} />
        <Route path="/Lipstick2" component={Lipstick2} />

        <Route path="/WaxStrips" component={WaxStrips} />
        <Route path="/HairRemoval" component={HairRemoval} />
        <Route path="/Haseeb" component={Haseeb} />
        <Route path="/UserPanel" component={UserPanel} />
        <Route path="/error" component={Opps} />

        {/* </Switch> */}
      </Routes>
    </>
  )
}

export default App
