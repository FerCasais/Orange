import {Row, Col, Container, Card, Button } from "react-bootstrap";
import Logo from "../assets/Logo.png";

const Nosotros = () => {
  return (<>

  <Container>
    <Row>
      <Col className="mb-5 bg-light"><h3 >Nosotros</h3>
    <h6>Quienes somos</h6>
    <p >Iniciemos definiendo un ERP ( Enterprise resource planning) cuyo significado es un “sistema de planificación de recursos empresariales” en donde vamos a integrar y automatizar los procesos de tu negocio, aumentando la productividad de tu empresa  

 
¿Has sentido que vendes y vendes pero no ves el dinero? ¿Cual es tu realidad financiera?
 
Sabemos que la cotidianidad del empresario implica la toma de decisiones y entre más acertadas sean, definirán el rumbo de tu empresa con un impacto positivo , por eso es vital que no tomes a ciegas las decisiones o con la información del periodo pasado ya que nuestro entorno y el comportamiento de nuestro negocio va evolucionando diariamente.
Cuando no se cuenta con un ERP se abre paso a la ineficiencia operativa, el retrabajo, los procesos propensos a errores, incómodos, manuales </p>
      </Col>
    </Row>
  </Container>

  <Container>
    <Row>
      <Col><h4 className="mb-4 bg-light w-60">Porque elegirnos</h4>
      </Col>
    </Row>
  </Container>
   

  <Container>
    <Row>
      <Col><Card>
      <Card.Body><h6>¿Qué beneficios puede traer un ERP a tu emprendimiento  ?</h6><p className="text-left">
 


Si vamos al avances tecnológicos que encontramos en los ERP, podemos citar como ejemplo  la facturación electrónica .Todos sabemos que el tiempo es dinero , has pensado en el tiempo que incurres en procesos de mensajería , impresión y almacenamiento , sin hablar de los costos implícitos en estos procesos , te gustaría optimizar tu tiempo y el de tus colaboradores?, seguramente que la facturación electrónica es la solución, ya que la factura llega directamente al correo del cliente sin necesidad de enviarla con un mensajero, imprimirla y adicional a esto también cumples con la normativa de reportar a la DIAN
 
 
A la hora de elegir tu ERP, la recomendación es escoger un software en la nube y no instalado, pues te proporcionará los siguientes beneficios : 

·  	Toma de decisiones en tiempo real.Ya no tendrás que tomar decisiones a ciegas o esperar que el contador te entregue los estados financieros , para que conozcas como marcha tu empresa 
·  	Captas la información de tus clientes al momento de realizar las ventas, lo cual es uno de los  activos más valioso
·  	Automatizas procesos recurrentes . Los conteos manuales y las planillas en Excel han quedado en el pasado porque dan paso a errores y duplicación , se hace necesario la adquisición de tecnologías que permitan automatizar y simplificar los procesos asociados a los inventarios y estatus del stock.
·  	Amigable con el medio ambiente. Ahorras papel cuando envías tus facturas al correo de tus clientes 
·  	No necesitan licencias , contarás con un módelo de S.A.A.S donde no tendrás que hacer mantenimientos, a través de la 

 </p></Card.Body>
    </Card>

      </Col>


      
      <Col>
      <Card>
      <Card.Body><h6 >¿Qué es la nube ?</h6>Siempre hablamos de la tecnología y usamos herramientas como intagram , Facebook pero y tu contabilidad ?, 

Empezamos definiendo a la nube Conjunto de recursos computacionales de gran escala conectados a través de una red computacional que se pueden consumir a gran escala , de tal manera que empresas como netflix  ,youtube , naranja erp puedan alojarse en la nube 
Añadir que es la nube 

3.Cual es la importancia de conectar la información de tu negocio en la nube 

Primero estaría bien hablar de la importancia del por que debo organizar la información de mi negocio y es que . Ventas a contado a crédito , gastos fijos y variables , negociaciones con proveedores
No se puede medir lo que no se puede ver y lo que no se puede ver no se puede gestionar 


Vendes y vendes pero no ves el dinero , cual es tu realidad financiera?

Sabemos la cotidianidad del empresario implica la toma de decisiones y entre mas acertadas sean, definirán el rumbo de tu empresa con un impacto positivo , por eso es vital que no las tomes a ciegas o con la información del periodo pasado ya que nuestro entorno y el comportamiento de nuestro negocio va evolucionando diariamente.
Cuando no se cuenta con un ERP se abre paso a la ineficiencia operativa, el retrabajo, los procesos propensos a errores, incómodos, manuales Facturacion electrónica 
Todos sabemos que el tiempo es dinero , Has pensado en el tiempo que incurres en procesos de mensajería , impresión y almacenamiento , sin hablar de los costos implicitos en estos procesos , Te gustaria optimizar tu tiempo y el de tus colaboradores 


 </Card.Body>
    </Card>
     </Col>
    </Row>
  </Container>

  <Container>
    <Row>
      <Col> 
      <Card className={'mt-5'} style={{ width: '100%' }}>
      <Card.Img variant="top" src={Logo} style={{ width: "20%" }} />
      <Card.Body>
        <Card.Title>Naranja ERP</Card.Title>
        <Card.Text>
        Si eres un emprendedor y valoras tu tiempo seguramente invertirás en este tipo de tecnología , sobre todo ¿Eres un nómada digital ?, puedes moverte a otro lugar y seguir conservando tu información
        </Card.Text>
        <Button variant="primary">Contáctanos!</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
  </Container>
   
   
 </> )
}

export default Nosotros