import './App.css'
import AutosCanada from './components/AutosCanada'
import BuySale from './components/BuySale'
import Footer from './components/Footer'
import KijijiCentral from './components/KijijiCentral'
import MobileAppPromotion from './components/MobileAppPromotion'
import NavHero from './components/NavHero'
import RealState from './components/RealState'
import SignIn from './components/SignIn'
import Slider from './components/Slider'

function App() {
 
  return (
    <>
    <NavHero />
    <Slider />
    <AutosCanada />
    <BuySale />
    <SignIn />
    <RealState />
    <KijijiCentral />
    <MobileAppPromotion />
    <Footer />
    </>
  )
}

export default App
