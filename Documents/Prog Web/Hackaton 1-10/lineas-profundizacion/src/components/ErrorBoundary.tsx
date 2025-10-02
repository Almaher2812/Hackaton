// src/components/ErrorBoundary.tsx
import React, { ErrorInfo } from 'react'

type State = { hasError: boolean }

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // aquí podrías enviar a un servicio de logs
    console.error("ErrorBoundary caught:", error, info)
  }

  handleReset = () => {
    // opcional: limpiar sesiones y recargar
    localStorage.removeItem('auth')
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mt-5">
          <div className="p-4 bg-white rounded shadow-sm">
            <h3>Ops — algo no funcionó 😵</h3>
            <p>Se detectó un error en la aplicación. Intenta recargar.</p>
            <button className="btn btn-primary" onClick={this.handleReset}>Recargar</button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
