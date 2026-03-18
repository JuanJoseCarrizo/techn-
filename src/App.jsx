import { Routes , Route } from 'react-router-dom'

import Navigation from './components/Nav'
import Main from './components/Main'
import Catalogo from './paginas/Catalogo'
import FormularioControlado from './components/Formularios/FormularioControlado'
import Contacto from './paginas/Contacto'
import Footer from './components/Footer'
import './App.css'

{/*PAGINAS*/}

import Cursos from './paginas/Cursos'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/" element={
            <>
              <Main />
            </>
          }
        />

        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/curso/:id" element={<Cursos />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App