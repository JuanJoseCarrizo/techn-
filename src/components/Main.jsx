import React from "react"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselInicio from "./CarouselInicio";
import FormularioControlado from "./Formularios/FormularioControlado";

const Main = () => {
    return (
        <main>
            <section className="section-inicio">
                <Container className="pt-5 pb-5">
                    <h1 className="fs-5">Bienvenido a</h1>
                    <h1 className="fs-1">Téchne</h1>
                    <h1 className="fs-6 mt-3">Arte, movimiento y creatividad en un solo lugar</h1>

                    <div>
                        <Link className="btn mt-3" to="/catalogo">
                            Ver Clases
                        </Link>
                    </div>

                </Container>
            </section>

            <section className="section-2">
                <Container>
                    <h3>¿Quiénes somos?</h3>

                    <div className="mt-4 pt-4">
                        <h5>Somos un instituto de artes donde se combinan</h5>
                        <h5>expresión, creatividad y bienestar.</h5>
                    </div>
                </Container>
            </section>

            <section className="section-3">
                <h3 className="mt-5">Nuestras clases</h3>
                <CarouselInicio />
            </section>

            <section className="section-4">
                <FormularioControlado/>
            </section>

        </main>
    )
}

export default Main;