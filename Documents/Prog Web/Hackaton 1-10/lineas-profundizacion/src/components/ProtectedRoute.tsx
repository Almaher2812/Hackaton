// src/components/ProtectedRoute.tsx
import React from 'react'
import { Navigate } from 'react-router-dom'
import * as auth from '../services/auth'

interface Props {
  children: JSX.Element
  requiredRole?: 'admin' | 'user'
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  const role = auth.getRole()
  if (requiredRole && role !== requiredRole) {
    // usuario autenticado pero sin permiso
    return <Navigate to="/dashboard" replace />
  }
  return children
}
