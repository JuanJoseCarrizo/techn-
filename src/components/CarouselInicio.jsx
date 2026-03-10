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
                <img className="carousel-img" src="/imagenes/canto.jpg" alt="img1" />
              </Col>

              <Col md={4}>
                <img className="carousel-img" src="/imagenes/dibujo.jpg" alt="img2" />
              </Col>

              <Col md={4}>
                <img className="carousel-img" src="/imagenes/piano.jpg" alt="img3" />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col md={4}>
                <img className="carousel-img" src="/imagenes/canto.jpg" alt="img4" />
              </Col>

              <Col md={4}>
                <img className="carousel-img" src="/imagenes/dibujo.jpg" alt="img5" />
              </Col>

              <Col md={4}>
                <img className="carousel-img" src="/imagenes/piano.jpg" alt="img6" />
              </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>

      {/* Carrusel para celular */}
      <div className="d-md-none p-5 carousel">
        <Carousel>

          <Carousel.Item>
            <img className="carousel-img w-100" src="/imagenes/canto.jpg" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img w-100" src="/imagenes/dibujo.jpg" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img w-100" src="/imagenes/piano.jpg" />
          </Carousel.Item>

        </Carousel>
      </div>
    </>
  );
}

export default CarouselInicio;