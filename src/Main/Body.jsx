import ReactPlayer from "react-player";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo3 from "../assets/Logo3.png";
import Logo from "../assets/Logo.png";

const Body = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="logo3">
            <img src={Logo3} alt="" />{" "}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={Logo} style={{ width: "20%" }} />
              <Card.Body>
                <Card.Title>Descripción</Card.Title>
                <Card.Text>
                  Inicio 1. software administrativo y de facturación para
                  empresas. gestiona tu punto de venta desde cualquier lugar y
                  dispositivo. BOTON ( ESCRIBENOS ) Naranja Pos factura de forma
                  fácil e intuitiva ¡Consulta tus reportes y comprobantes en
                  tiempo real! acceso seguro desde la nube Características /*
                  agrega iconos a cada una de las caracteristicas*/ sugeridos
                  facturacion en la nube accede rápido a tu información desde el
                  lugar donde estes con naranja erp y aprovecha las ventajas de
                  usar tu software en la nube Clientes/proveedores ten siempre a
                  la mano tus bases de datos de clientes y proveedores Control
                  de inventarios controla las existencias de tu inventario en
                  tiempo real. realiza ajustes y descarga existencias al momento
                  de facturar Cajas administra tus aperturas y cierres de caja
                  diario, consulta tu histórico de cajas por fechas y por
                  usuarios Cartera lleva el control de la cartera de clientes,
                  realiza recibos de caja por concepto de abono de tus ventas a
                  credito Compras ingresa tus facturas de compra, agrega el
                  costo y existencia a todos tus items traslados efectúa
                  traslados de inventario entre sucursales, acepta o rechaza los
                  envíos y consulta su trazabilidad ( que puedan ver los videos
                  al dar clic sobre la caracteristica) Naranja Academy Potencia
                  tus conocimientos con Naranja Academy sin costo adicional
                  Ingresa gratis a nuestra academia digital, solo adquiere la
                  licencia anual de Naranja Erp y tendrás acceso ilimitado para
                  todos los usuarios, desde gerencia hasta colaboradores podrán
                  ver los cursos que tenemos disponibles BOTON ( APRENDE MAS) 4.
                  testimonios. 5. reconocimientos Apps.co Spinit
                </Card.Text>
                <Button variant="primary">Video</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {" "}
            <div className="video-container"></div>
            <Card style={{ width: "100%" }}>
              <div className="testimonial">
                <ReactPlayer
                  variant="center"
                  url={
                    '<iframe width="853" height="480" src="https://www.youtube.com/embed/QoKrlqNOYZs" title="Testimonio clientes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                  }
                />{" "}
                <img src={Logo} alt="" style={{ width: "40%" }} />{" "}
              </div>
              <Card.Body>
                <Card.Title>Testimonio Clientes</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {" "}
            <Card className="main2">
              <h2>Naranja ERP es para ti</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, excepturi ex deleniti asperiores consequuntur soluta!
                Debitis optio minima nam harum dolorum quos quam dicta, nostrum
                laborum et ipsam culpa error? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus, excepturi ex deleniti
                asperiores consequuntur soluta! Debitis optio minima nam harum
                dolorum quos quam dicta, nostrum laborum et ipsam culpa error?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card className="main2">
              {" "}
              <h2>Ventajas</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, excepturi ex deleniti asperiores consequuntur soluta!
                Debitis optio minima nam harum dolorum quos quam dicta, nostrum
                laborum et ipsam culpa error? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus, excepturi ex deleniti
                asperiores consequuntur soluta! Debitis optio minima nam harum
                dolorum quos quam dicta, nostrum laborum et ipsam culpa error?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>{" "}
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/preguntasFrecuentes"
            >
              {" "}
              <h3 className="text-light">Preguntas frecuentes</h3>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
