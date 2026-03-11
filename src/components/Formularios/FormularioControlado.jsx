import { useState } from "react";
import { Container } from "react-bootstrap";


export default function FormularioControlado() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();
        alert(
            `Datos Enviados Correctamente`
        );
        setNombre("");
        setEmail("");
        setMensaje("");
    };

    return (
        <div className="formularioContacto ">
            <Container className="container d-flex justify-content-center align-items-center">
                <form className="form-contacto" onSubmit={manejarSubmit}>

                    <div>
                        <h2 className="text-center mt-1">Contacto</h2>
                    </div>

                    {/* nombre */}
                    <div style={{ marginBottom: "10px" }}>
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Escribe tu nombre"
                            required
                        />
                    </div>

                    {/* email */}
                    <div style={{ marginBottom: "10px" }}>
                        <label className="form-label">Mail</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tumail@****.com"
                            required
                        />
                    </div>

                    {/* mensaje| */}
                    <div style={{ marginBottom: "10px" }}>
                        <label className="form-label">Mensaje</label>
                        <textarea
                            className="form-control"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            placeholder="Su mensaje..."
                            required
                        />
                    </div>


                    <button type="submit" className="form-control">Enviar</button>
                </form>
            </Container>
        </div>

    )


}