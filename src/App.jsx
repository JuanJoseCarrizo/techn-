import { Routes , Route } from 'react-router-dom'

import Navigation from './components/Nav'
import CarouselInicio from './components/CarouselInicio'
import Main from './components/Main'
import Catalogo from './components/Catalogo'
import Footer from './components/Footer'
import './App.css'





function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/" element={
            <>
              <Main />
              <CarouselInicio />
            </>
          }
        />

        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App