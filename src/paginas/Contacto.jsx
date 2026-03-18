import React from "react";
import FormularioControlado from '../components/Formularios/FormularioControlado'
import InfoContacto from "../components/InfoContacto"
import { Container , Row , Col} from "react-bootstrap"



const Contacto = () => {

    return (

        <Container className="my-5 contacto">
            <Row className="g-4 align-items-stretch">
                <Col md={6}>
                    <FormularioControlado />
                </Col>

                <Col md={6}>
                    <InfoContacto />
                </Col>
            </Row>
        </Container>

    )
}

export default Contacto;