import { NavLink } from 'react-router-dom';
import {Row, Col, Container } from "react-bootstrap";


const Menu = () => {
  return (
    <>

    <Container>
      <Row>
        <Col>
       

{/* <Navbar bg="light" expand="lg">
      <Container>
       
            <NavDropdown title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
         
      </Container>
    </Navbar> */}

    <div className='menu'>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/nosotros"> <h3 className='text-light'>Nosotros</h3></NavLink>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/caracteristicas">  <h3 className='text-light'>Características</h3></NavLink>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/planes">  <h3 className='text-light'>Planes</h3></NavLink>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/videoTour">  <h3 className='text-light'>Video Tour</h3></NavLink>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/preguntasFrecuentes" >   <h3 className='text-light'>Preguntas frecuentes</h3></NavLink>
   <NavLink className={({ isActive })=>  isActive ? 'bg-warning': 'bg-secondary-subtle'} to="/" >   <h3 className='text-light'>Home</h3></NavLink>
   
    
   
   
    </div>
    </Col>
      </Row>
    </Container>
</>
    
     
  );
  
}

export default Menu