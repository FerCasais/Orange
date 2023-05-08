import ReactPlayer from "react-player";
import {Row, Col, Container } from "react-bootstrap";


const VideoTour = () => {
  return (<>
  <Container>
    <Row>
      <Col>
    <div className='nosotros'><h4>VideoTour</h4>
    <p>
    Echa un vistazo a nuestros tutoriales y puede que aclaremos tus respuestas
    Video Tour Naranja Erp ( FUNCIONALIDADES PRINCIPALES )
    
    Si necesitas un acompañamiento más personalizado, escríbenos a @soporte@naranjaerp.com</p></div>
    
    <div className="video-container">
        <ReactPlayer
          url={
            '<iframe width="853" height="480" src="<iframe width="768" height="480" src="https://www.youtube.com/embed/jkXT2mjXK2U" title="Video Tour Naranja Erp ( FUNCIONALIDADES PRINCIPALES )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>" title="Testimonio clientes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
          }
        />
      </div>
      </Col>
    </Row>
  </Container>
  </>)
}

export default VideoTour