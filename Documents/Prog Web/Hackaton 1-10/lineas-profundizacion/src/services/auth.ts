// src/services/auth.ts
type Role = 'admin' | 'user'
type Session = { username: string; role: Role; token: string }

const USERS = [
  { username: 'admin', password: '1234', role: 'admin' as Role },
  { username: 'user',  password: 'abcd', role: 'user'  as Role },
]

export function login(username: string, password: string): Session {
  const u = USERS.find(x => x.username === username && x.password === password)
  if (!u) throw new Error('Credenciales incorrectas')
  const session: Session = { username: u.username, role: u.role, token: Date.now().toString() }
  localStorage.setItem('auth', JSON.stringify(session))
  return session
}

export function logout() {
  localStorage.removeItem('auth')
}

export function getAuth(): Session | null {
  const s = localStorage.getItem('auth')
  return s ? (JSON.parse(s) as Session) : null
}

export function isAuthenticated(): boolean {
  return !!getAuth()
}

export function getRole(): Role | null {
  return getAuth()?.role ?? null
}
