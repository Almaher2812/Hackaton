import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table, Card } from "react-bootstrap";

type Estudiante = {
  nombre: string;
  edad: number;
  linea: string;
};

function Dashboard() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [linea, setLinea] = useState("");

  // ✅ Cargar estudiantes desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem("estudiantes");
    if (data) {
      setEstudiantes(JSON.parse(data));
    }
  }, []);

  // ➕ Agregar estudiante y guardar en localStorage
  const agregarEstudiante = () => {
    if (!nombre || !edad || !linea) return;

    const nuevo: Estudiante = { nombre, edad: parseInt(edad), linea };
    const nuevos = [...estudiantes, nuevo];
    setEstudiantes(nuevos);
    localStorage.setItem("estudiantes", JSON.stringify(nuevos));

    setNombre("");
    setEdad("");
    setLinea("");
  };

  // ❌ Eliminar estudiante y actualizar localStorage
  const eliminarEstudiante = (index: number) => {
    if (!window.confirm("¿Seguro que quieres desmatricular a este estudiante?")) return;
    const nuevos = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevos);
    localStorage.setItem("estudiantes", JSON.stringify(nuevos));
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Formulario */}
        <Col md={4}>
          <Card className="p-3 shadow-lg rounded-3">
            <h4 className="text-center">➕ Registrar Estudiante</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese la edad"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Línea de profundización</Form.Label>
                <Form.Select
                  value={linea}
                  onChange={(e) => setLinea(e.target.value)}
                >
                  <option value="">Seleccione una línea</option>
                  <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                  <option value="Ciberseguridad">Ciberseguridad</option>
                  <option value="Desarrollo Web">Desarrollo Web</option>
                  <option value="Redes y Telecomunicaciones">Redes y Telecomunicaciones</option>
                  <option value="Big Data">Big Data</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" className="w-100" onClick={agregarEstudiante}>
                Registrar
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Lista */}
        <Col md={8}>
          <Card className="p-3 shadow-lg rounded-3">
            <h4 className="text-center">📋 Estudiantes Registrados</h4>
            <Table striped bordered hover responsive className="mt-3 align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Línea de profundización</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {estudiantes.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.nombre}</td>
                    <td>{e.edad}</td>
                    <td>{e.linea}</td>
                    <td className="text-center">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => eliminarEstudiante(i)}
                      >
                        ❌ Desmatricular
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {estudiantes.length === 0 && (
              <p className="text-center text-muted">No hay estudiantes registrados aún.</p>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
