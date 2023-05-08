import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom';




const Header = () => {
  return (
    <Container fluid >
      <Row>
        <Col>
   <NavLink  to="/" >   <img src= {Logo}  /> </NavLink>
      
          
    </Col>
    </Row>
    
    </Container>
  )
}

export default Header