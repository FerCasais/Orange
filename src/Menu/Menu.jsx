import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Menu = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>

  


    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Menú</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Naranja ERP
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="menu">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/nosotros"
              >
                {" "}
                <h6 className="text-light">Nosotros</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/caracteristicas"
              >
                {" "}
                <h6 className="text-light">Características</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/planes"
              >
                {" "}
                <h6 className="text-light">Planes</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/videoTour"
              >
                {" "}
                <h6 className="text-light">Video Tour</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/preguntasFrecuentes"
              >
                {" "}
                <h6 className="text-light">Preguntas frecuentes</h6>
              </NavLink>
            </div>
                  <Nav.Link href="#action1">Nosotros</Nav.Link>
                  <Nav.Link href="#action2">Caracteristicas</Nav.Link>
                  <NavDropdown
                    title="Soluciones para tu empresa"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Planes</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Video Tour
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                     Preguntas Frecuentes
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>




            <div className="menu">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/nosotros"
              >
                {" "}
                <h6 className="text-light">Nosotros</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/caracteristicas"
              >
                {" "}
                <h6 className="text-light">Características</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/planes"
              >
                {" "}
                <h6 className="text-light">Planes</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/videoTour"
              >
                {" "}
                <h6 className="text-light">Video Tour</h6>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-warning" : "bg-secondary-subtle"
                }
                to="/preguntasFrecuentes"
              >
                {" "}
                <h6 className="text-light">Preguntas frecuentes</h6>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
