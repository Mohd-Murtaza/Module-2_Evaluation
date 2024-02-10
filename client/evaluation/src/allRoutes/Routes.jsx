import React from 'react'
import {Routes,Route} from 'react-router-dom'
const Routes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default Routes
