import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "react-bootstrap";

function InfoContacto() {
    const telefono = "5491124959473";

    const mensaje = encodeURIComponent(
        "Hola! Estoy interesado en los cursos de Téchne. Me gustaría recibir más información sobre el curso: "
    );

    const whatsappLink = `https://wa.me/${telefono}?text=${mensaje}`;

    return (
        <div className="infoContactoWrapper">
            <Container className="d-flex justify-content-center align-items-center">

                <div className="info-contacto">

                    <div>
                        <h2 className="text-center mt-1 fs-2">Información de contacto</h2>

                        <p className="mb-2 fs-6">
                            📍 <strong>Dirección:</strong><br />
                            Calle Falsa 123, Buenos Aires
                        </p>

                        <p className="mb-2 fs-6">
                            ☎ <strong>Teléfono:</strong><br />
                            +54 11 1234-5678
                        </p>

                        <p className="mb-4 fs-6">
                            ✉ <strong>Email:</strong><br />
                            info@techne.com
                        </p>
                    </div>

                    <div className="mt-4 fs-6">
                        <p className="mb-2"><strong>¿Prefieres una respuesta rápida?</strong></p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                            style={{ backgroundColor: "#9F8DDD", color: "white" }}
                        >
                            <FaWhatsapp size={22} style={{ marginTop: "1px" }} />
                            Hablar por WhatsApp
                        </a>
                    </div>

                </div>

            </Container>
        </div>
    );
}

export default InfoContacto;