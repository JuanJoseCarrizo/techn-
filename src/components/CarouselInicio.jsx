import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";

function CarouselInicio() {
  return (
    <>
      {/* Carrusel para pantallas grandes */}
      <div className="d-none d-md-block p-5 ">
        <Carousel>

          <Carousel.Item>
            <Row className="g-4">
              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                    alt="Imagen de carousel de canto" />
                </div>
              </Col>

              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                    alt="Imagen de carousel de dibujo" />
                </div>
              </Col>

              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                    alt="Imagen de carousel de piano" />
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="g-4">
              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                    alt="Imagen de carousel de canto" />
                </div>
              </Col>

              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                    alt="Imagen de carousel de dibujo" />
                </div>
              </Col>

              <Col md={4}>
                <div className="carousel-img-wrapper">
                  <img
                    className="carousel-img"
                    src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                    alt="Imagen de carousel de piano" />
                </div>
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>

      {/* Carrusel para celular */}
      <div className="d-md-none p-5 carousel">
        <Carousel>

          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="carousel-img w-100"
                src={`${import.meta.env.BASE_URL}imagenes/canto.jpg`}
                alt="Imagen de carousel de canto" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="carousel-img w-100"
                src={`${import.meta.env.BASE_URL}imagenes/dibujo.jpg`}
                alt="Imagen de carousel de dibujo" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="carousel-img w-100"
                src={`${import.meta.env.BASE_URL}imagenes/piano.jpg`}
                alt="Imagen de carousel de piano" />
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
}

export default CarouselInicio;