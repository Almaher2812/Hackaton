import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import Dashboard from "./Dashboard";

const AdminPanel: React.FC = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <Container fluid className="p-0">
      {/* Barra superior */}
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand className="fw-bold">⚙️ Panel de Administración</Navbar.Brand>
      </Navbar>

      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-light vh-100 p-3 border-end">
          <h5 className="fw-bold">Menú</h5>
          <Nav className="flex-column">
            <Nav.Link
              active={active === "dashboard"}
              onClick={() => setActive("dashboard")}
            >
              📊 Dashboard
            </Nav.Link>
            <Nav.Link
              active={active === "usuarios"}
              onClick={() => setActive("usuarios")}
            >
              👥 Usuarios
            </Nav.Link>
            <Nav.Link
              active={active === "config"}
              onClick={() => setActive("config")}
            >
              ⚙️ Configuración
            </Nav.Link>
          </Nav>
        </Col>

        {/* Contenido principal */}
        <Col md={10} className="p-4">
          {active === "dashboard" && <Dashboard />}
          {active === "usuarios" && (
            <div>
              <h2>👥 Gestión de Usuarios</h2>
              <p>Aquí podrás ver y administrar usuarios del sistema.</p>
            </div>
          )}
          {active === "config" && (
            <div>
              <h2>⚙️ Configuración</h2>
              <p>Opciones generales del sistema.</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
