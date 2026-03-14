import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import cursos from "../data/cursos"

function Catalogo() {
    return (
        <Container fluid className="catalogo px-0">

            {/* Imagen principal */}
            <div className="catalogo-banner">
                <img
                    src={`${import.meta.env.BASE_URL}imagenes/banner-catalogo2.png`}
                    alt="Banner del catalogo" className="w-100" />
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

                {cursos.map((curso) => (

                    <div className="curso" key={curso.id}>

                        <Link to={`/curso/${curso.id}`}>

                            <img
                                src={curso.imagenCatalogo}
                                alt={curso.titulo}
                                className="w-100 mb-2"
                            />

                        </Link>

                    </div>

                ))}

            </div>

        </Container >
    );
}

export default Catalogo;