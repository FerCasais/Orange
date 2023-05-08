import {Row, Col, Container } from "react-bootstrap";
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';




const Header = () => {
  return (
    <Container fluid>
    <Row>
      <Col> <NavLink  to="/" >   <img src= {Logo} className="logo" /> </NavLink>1 of 1</Col>
    </Row>
  </Container>
   
  
      
          
  
  )
}

export default Header