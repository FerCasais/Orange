import React from 'react'
import Logo2 from '../assets/Logo2.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Planes = () => {
  return (<>
  <Container>
    <Row>
      <Col>
     
    <div className='nosotros'><h2>Planes</h2>
    <img src={Logo2} alt="" /></div>
    </Col>
    </Row>
  </Container>
  </>
  )
}

export default Planes