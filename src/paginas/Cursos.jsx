import React from "react";
import { useParams } from "react-router-dom"
import cursos from "../data/cursos"

const Cursos = () => {

    // 1️⃣ obtenemos el id desde la URL
    const { id } = useParams()

    // 2️⃣ buscamos el curso correspondiente en cursos.js
    const curso = cursos.find(c => c.id === id)

    // 3️⃣ si no existe el curso evitamos que la página rompa
    if (!curso) {
        return <h2>Curso no encontrado</h2>
    }


    return (
        <>

            {/* HERO */}
            <section
                className="curso-hero"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), 
                    url(${curso.imagen})`
                }}>

                <div className="hero-overlay">
                    <h1>{curso.titulo}</h1>
                    <p>{curso.subTitulo}</p>
                    <button className="btn btn-warning">Inscribirse</button>
                </div>
            </section>



            {/* SECCION INFORMACION */}
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-8">
                        <h3>Sobre el Curso</h3>
                        <p>{curso.descripcion}</p>

                        <h3 className="mt-4">Programa del Curso</h3>
                        <ul>
                            {curso.programa.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <div className="curso-info">
                            <h4>Información del Curso</h4>
                            <ul>
                                <li>Días: {curso.dias}</li>
                                <li>Horario: {curso.horario}</li>
                                <li>Modalidad: {curso.modalidad}</li>
                                <li>Cupo limitado</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            {/* PROFESOR */}
            <div className="profesor container py-5">
                <img src={curso.imagenProfesor} alt={curso.nombreProfesor} />

                <div>
                    <h4>{curso.nombreProfesor}</h4>

                    {curso.descripcionProfesor.map((parrafoDescriptivo, index) => (
                        <p key={index}> {parrafoDescriptivo} </p>
                    ))}

                </div>
            </div>




            {/* GALERIA */}
            <div className="container py-5">

                <div className="row g-3">

                    {curso.galeria.map((img, index) => (

                        <div className="col-md-3" key={index}>
                            <img
                                src={img}
                                className="img-fluid"
                                alt={`Imagen del curso ${curso.titulo}`}
                            />
                        </div>

                    ))}

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