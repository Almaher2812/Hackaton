import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <h1 className="fw-bold">Líneas de Profundización</h1>
          <p className="lead">
            Bienvenido al sistema de gestión de líneas de profundización en 
            <span className="fw-semibold"> Ingeniería de Sistemas</span>.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Inteligencia Artificial</Card.Title>
              <Card.Text>
                Explora el mundo del aprendizaje automático, redes neuronales 
                y procesamiento de datos para resolver problemas complejos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Desarrollo Web</Card.Title>
              <Card.Text>
                Aprende a construir aplicaciones modernas, seguras y escalables 
                para la web y dispositivos móviles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Redes y Seguridad</Card.Title>
              <Card.Text>
                Domina el diseño de infraestructuras de red y protege 
                sistemas frente a ciberataques.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
