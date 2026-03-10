import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";

function CarouselInicio() {
  return (
    <>
      {/* Carrusel para pantallas grandes */}
      <div className="d-none d-md-block p-5 carousel">
        <Carousel>

          <Carousel.Item>
            <Row >
              <Col md={4} >
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                            alt="Imagen de carousel de canto"/>
              </Col>

              <Col md={4}>
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                            alt="Imagen de carousel de dibujo"/>
              </Col>

              <Col md={4}>
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                            alt="Imagen de carousel de piano"/>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col md={4}>
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                            alt="Imagen de carousel de canto"/>
              </Col>

              <Col md={4}>
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                            alt="Imagen de carousel de dibujo"/>
              </Col>

              <Col md={4}>
                <img className="carousel-img" src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                            alt="Imagen de carousel de piano"/>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>

      {/* Carrusel para celular */}
      <div className="d-md-none p-5 carousel">
        <Carousel>

          <Carousel.Item>
            <img className="carousel-img w-100" src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                            alt="Imagen de carousel de canto"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img w-100" src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                            alt="Imagen de carousel de dibujo"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img w-100" src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                            alt="Imagen de carousel de piano"/>
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
}

export default CarouselInicio;