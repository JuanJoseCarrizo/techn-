import React from "react";

const Cursos = () => {

    return (
        <>

            {/* HERO */}
            <section className="curso-hero">
                <div className="hero-overlay">
                    <h1>Curso de Pintura Artística</h1>
                    <p>Desarrolla tu creatividad con la pintura</p>
                    <button className="btn btn-warning">Inscribirse</button>
                </div>
            </section>



            {/* SECCION INFORMACION */}
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-8">
                        <h3>Sobre el Curso</h3>
                        <p>Descripción del curso...</p>

                        <h3 className="mt-4">Programa del Curso</h3>
                        <ul>
                            <li>Introducción a las técnicas</li>
                            <li>Teoría del color</li>
                            <li>Pintura al óleo y acrílico</li>
                            <li>Composición y perspectiva</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <div className="curso-info">
                            <h4>Información del Curso</h4>
                            <ul>
                                <li>Duración: 8 semanas</li>
                                <li>Horario: Martes y Jueves</li>
                                <li>Nivel: Principiante</li>
                                <li>Cupo limitado</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            {/* PROFESOR */}
            <div className="profesor">
                <img src="/imagenes/profesora.jpg" />

                <div>
                    <h4>Marta Gómez</h4>
                    <p>Artista y profesora</p>
                    <p>Con más de 10 años enseñando pintura.</p>
                </div>
            </div>




            {/* GALERIA */}
            <div className="row g-3">

                <div className="col-md-3">
                    <img src="/imagenes/trabajo1.jpg" className="img-fluid" />
                </div>

                <div className="col-md-3">
                    <img src="/imagenes/trabajo2.jpg" className="img-fluid" />
                </div>

                <div className="col-md-3">
                    <img src="/imagenes/trabajo3.jpg" className="img-fluid" />
                </div>

                <div className="col-md-3">
                    <img src="/imagenes/trabajo4.jpg" className="img-fluid" />
                </div>

            </div>




            {/* BOTON */}
            <div className="text-center py-5">
                <h3>¿Listo para crear?</h3>
                <button className="btn btn-warning btn-lg mt-3">
                    Inscribirse Ahora
                </button>
            </div>

        </>
    );
}

export default Cursos;