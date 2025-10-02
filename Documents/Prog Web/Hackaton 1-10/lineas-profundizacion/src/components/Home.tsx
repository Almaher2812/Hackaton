// src/pages/Home.tsx
export default function Home() {
  return (
    <div className="container mt-4">
      <div className="hero p-4">
        <h1 className="display-6">Líneas de Profundización — Ingeniería de Sistemas</h1>
        <p className="lead">Explora las líneas, regístrate en las actividades y gestiona inscripciones.</p>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Sistemas Embebidos</h5>
            <p>IoT, microcontroladores y sistemas en tiempo real.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Desarrollo Web</h5>
            <p>Arquitecturas modernas, front y back.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Data Science</h5>
            <p>Minería, ML y visualización de datos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
