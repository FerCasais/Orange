import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
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
