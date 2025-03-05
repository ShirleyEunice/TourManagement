import React from 'react'
import Dashboard from './Dashboard'
import AddInternationalTourPackages from './AddInternationalTourPackages'
import AddAsiaPackages from './AddAsiaPackages'



function Admin() {
  return (
    <div className="container-fluid">
      <Dashboard />
      <AddInternationalTourPackages />
      <AddAsiaPackages />
    </div>
  )
}

export default Admin