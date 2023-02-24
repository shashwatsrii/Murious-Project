import React from 'react'
import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'

function App() {

  return (
    <div className="App">
      <StudentDashboard />
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
