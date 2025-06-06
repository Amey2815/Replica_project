import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import PricingPage from './pages/Pricing/Pricing'
import ChannelPartner from './pages/Channel/Channel'
import Refund from './pages/Refund/Refund'
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'
function App() {

  return (
    <>
    <div className='w-full overflow-hidden' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About-Us' element={<About/>} />
        <Route path='/Pricing' element={<PricingPage/>}/>
        <Route path='/Channel-Partner' element={<ChannelPartner/>}/>
        <Route path='/refund' element={<Refund/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      <Footer/>
    </div>

    </>
  )
}

export default App
