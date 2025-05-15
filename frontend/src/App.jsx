import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
function App() {

  return (
    <>
    <div className='w-full' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About-Us' element={<About/>} />
      </Routes>
      <Footer/>
    </div>

    </>
  )
}

export default App
