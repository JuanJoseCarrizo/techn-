import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Catalogo() {
    return (
        <Container fluid className="catalogo px-0">

            {/* Imagen principal */}
            <div className="catalogo-banner">
                <img
                src={`${import.meta.env.BASE_URL}imagenes/banner-catalogo2.png`}
                            alt="Banner del catalogo" className="w-100"/>
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
                    <Link to={`/curso/dibujo-pintura`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-dibujo-pintura.jpg`}
                            alt="Curso de dibujo y pintura" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/piano`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-piano.jpg`}
                            alt="Curso de piano" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/canto`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-canto.jpg`}
                            alt="Curso de canto" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/violin`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-violin.jpg`}
                            alt="Curso de violin" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/pintura-oleo`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-pintura-oleo.jpg`}
                            alt="Curso de pintura al oleo" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/taller-ninos`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-taller-ninos.jpg`}
                            alt="Taller de arte para niños" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/manga`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-manga.jpg`}
                            alt="Curso de manga y diseño" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/yoga`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-yoga.jpg`}
                            alt="Curso de yoga" className="w-100 mb-2" />
                    </Link>
                </div>

                <div className="curso">
                    <Link to={`/curso/urbano-fusion`}>
                        <img src={`${import.meta.env.BASE_URL}imagenes/curso-urbano-fusion.jpg`}
                            alt="Curso urbano fusión" className="w-100 mb-2" />
                    </Link>
                </div>

            </div>

        </Container >
    );
}

export default Catalogo;