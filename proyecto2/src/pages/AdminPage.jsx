import React from 'react'
import TablaJuegos from "../components/admin/TablaJuegos"
import TablaUsuarios from "../components/admin/TablaUsuarios"
const AdminPage = () => {
  return (
    <div>
      <TablaJuegos></TablaJuegos>
      <TablaUsuarios></TablaUsuarios>
    </div>
  )
}

export default AdminPage
