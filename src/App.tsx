import './App.css'
import HeroSection from './pages/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './pages/AboutSection'

function App() {

  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      
    </div>
  )
}

export default App
