import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from 'react-bootstrap/Dropdown';


const Menu = () => {
  return (
    <>





    <Dropdown>
      <Dropdown.Toggle variant="warning text-light" id="dropdown-basic">
        Menú
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >
          <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/nosotros"
            >
              {" "}
              <h6 className=" btn btn-outline-danger">Nosotros</h6>
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item >
          <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/caracteristicas"
            >
              {" "}
              <h6 className=" btn btn-outline-danger">Caraceterísticas</h6>
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item >
          <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/planes"
            >
              {" "}
              <h6 className=" btn btn-outline-danger">Planes</h6>
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item >
          <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/videoTour"
            >
              {" "}
              <h6 className=" btn btn-outline-danger">Video Tour</h6>
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item >
          <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/preguntasFrecuentes"
            >
              {" "}
              <h6 className=" btn btn-outline-danger">Preguntas Frecuentes</h6>
            </NavLink>
          </Dropdown.Item>
          
      
      </Dropdown.Menu>
    </Dropdown>




    </>

      /* <Container>
        <Row>
          <Col>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/nosotros"
            >
              {" "}
              <h6 className="text-light">Nosotros</h6>
            </NavLink>
          </Col>

          <Col>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/caracteristicas"
            >
              {" "}
              <h6 className="text-light">Características</h6>
            </NavLink>
          </Col>

          <Col>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/planes"
            >
              {" "}
              <h6 className="text-light">Planes</h6>
            </NavLink>
          </Col>

          <Col>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/videoTour"
            >
              {" "}
              <h6 className="text-light">Video Tour</h6>
            </NavLink>
          </Col>

          <Col>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-warning" : "bg-secondary-subtle"
              }
              to="/preguntasFrecuentes"
            >
              {" "}
              <h6 className="text-light">Preguntas frecuentes</h6>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}; */
  );
};

export default Menu;
