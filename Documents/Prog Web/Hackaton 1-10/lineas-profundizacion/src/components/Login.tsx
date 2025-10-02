// src/components/Login.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as auth from '../services/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const user = auth.login(username.trim(), password)
      // redirigir según rol
      if (user.role === 'admin') navigate('/admin')
      else navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="mb-3">Inicio de sesión</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} required />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Ingresando...' : 'Ingresar'}
              </button>
            </form>
            <hr />
            <small>Credenciales demo: <strong>admin / 1234</strong> y <strong>user / abcd</strong></small>
          </div>
        </div>
      </div>
    </div>
  )
}
