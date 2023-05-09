import Logo2 from '../assets/Logo2.png'
import {Row, Col, Container } from "react-bootstrap";

const Planes = () => {
  return (<>
  <Container>
    <Row>
      <Col>
     
    <h2 className='nosotros'>Planes</h2>
    <img src={Logo2} alt="" className='logo2' />
    </Col>
    </Row>
  </Container>
  </>
  )
}

export default Planes