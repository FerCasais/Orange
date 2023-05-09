import { Row, Col, Container } from "react-bootstrap";

const PreguntasFrecuentes = () => {
  return (
    <>
      <Container className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <Row>
          <Col>
            <div className="nosotros"><h4 className="mb-3">PreguntasFrecuentes</h4>
              
              <h6>¿Esta segura la información? </h6>
              <p>
                {" "}
                En naranja erp tu información esta completamente segura pues
                esta en la nube y podrás acceder desde cualquier lugar y
                dispositivo, no debes preocuparte si tu computador se formatea o
                daña , ni de hacer back ups porque nosotros lo hacemos por ti a
                través de copias de seguridad{" "}
              </p>
              <h6>¿Lo puedo abrir desde cualquier lugar ?</h6>
              <p>
                {" "}
                Lo interesante de naranja erp es que la única condición técnica
                que necesitas es acceso a internet , podrás acceder desde
                cualquier lugar y dispositivo{" "}
              </p>
              <h6>¿Dónde esta alojada la plataforma ?</h6>
              <p>La plataforma esta alojada en el servidor digital ocean </p>
              <h6>¿Por qué debo pagar anualidades y no un solo pago ?</h6>
              <p>
                {" "}
                Nosotros ofrecemos nuestro sistema como un software as a a
                service , le incluimos actualizaciones, soporte y productos
                ilimitados no es una licencia que se va a quedar obsoleta o
                usted es el encargado de hacer los back ups de la información ,
                nosotros lo hacemos por ti{" "}
              </p>
              <h6>¿Puedo descargar estados financieros ?</h6>
              <p>
                Puedes descargar reportes para tu gestión administrativa y
                gerencial , por ejemplo innovar a partir de tu top de productos
                estrellas o más vendidos , pero no es un software contable por
                lo cual no tendrás acceso a los estados financieros
              </p>
              <h6> Como se cobra el sistema?</h6>
              <p>
                {" "}
                El sistema se cobra por el numero de usuarios y sucursales que
                tenga la empresa. El mínimo de usuarios que se arrienda son 2
              </p>
              <h6> Qué es un usuario?</h6>
              <p>
                {" "}
                Un usuario es cada persona que accede al sistema con su clave y
                perfil.
              </p>
              <h6> Cuanto cuesta un usuario ¿ ?</h6>
              <p>
                {" "}
                Naranja erp tiene un precio de $400.000 por usuario y sucursal
                anual o $240.000 semestral{" "}
              </p>
              <h6> Cómo es el pago del servicio ?</h6>
              <p> El pago es anual </p>
              <h6> Los valores cambian por módulos? </h6>
              <p> No </p>
              <h6> Con que módulos cuenta el sistema?</h6>
              <p>
                {" "}
                Inventario, Servicios, Ventas, Cartera, Gastos, Terceros,
                Tareas, Reportes{" "}
              </p>
              <h6>El soporte y actualizaciones tienen costo adicional?</h6>
              <p> No, esta incluido en el valor del servicio. </p>
              <h6> Puedo modificar la cantidad de usuarios mes a mes? </h6>
              <p> Si. </p>
              <h6>Necesito alguna infraestructura, como servidores?</h6>
              <p> No, Naranja erp es un servicio cloud.</p>
              <h6> Qué se necesita para acceder a Naranja erp ?</h6>
              <p> Un navegador web y una conexión a internet.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PreguntasFrecuentes;
