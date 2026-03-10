import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Catalogo() {
    return (
        <Container fluid className="catalogo px-0">

            {/* Imagen principal */}
            <div className="catalogo-banner">
                <img
                    src="/imagenes/banner-catalogo2.png"
                    alt="Arte y creatividad"
                    className="w-100"
                />
            </div>

            {/* Introducción */}
            <div className="catalogo-intro text-center w-50 mx-auto">
                <h2>Descubrí tu potencial artístico</h2>
                <p>
                    El arte es una forma de explorar nuevas ideas, desarrollar la
                    creatividad y descubrir talentos que muchas veces permanecen ocultos.
                    En nuestros cursos vas a poder experimentar distintas disciplinas y
                    encontrar el lenguaje artístico que mejor exprese tu identidad.
                </p>
            </div>

            {/* Cursos */}
            <div className="catalogo-cursos">

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-dibujo-pintura.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-piano.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-canto.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-violin.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-pintura-oleo.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-taller-ninos.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-manga.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-yoga.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to="/">
                        <img src="/imagenes/curso-urbano-fusion.jpg" className="w-100 mb-2" />
                    </Link>
                </div>

            </div>

        </Container >
    );
}

export default Catalogo;