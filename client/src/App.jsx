import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
      background:"aqua",
      width:"80%",
      margin:"auto",
      display:"flex",
      justifyContent:"space-around"
    }}>
      <Link to='/'>home</Link>
      <Link to='/register'>register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/logout'>logout</Link>
    </div>
    <AllRoutes/>
    </>
  )
}

export default App
