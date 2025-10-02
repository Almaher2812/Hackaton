// src/components/Navbar.tsx
import { Link, useNavigate } from 'react-router-dom'
import * as auth from '../services/auth'

export default function Navbar() {
  const navigate = useNavigate()
  const session = auth.getAuth()
  const role = session?.role

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Profundización</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>

            {!auth.isAuthenticated() && (
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            )}

            {auth.isAuthenticated() && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                {role === 'admin' && <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>}
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
