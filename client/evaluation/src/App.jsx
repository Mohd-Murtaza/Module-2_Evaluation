import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './allRoutes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/logout">Logout</Link>
      <Routes />
    </>
  )
}

export default App
