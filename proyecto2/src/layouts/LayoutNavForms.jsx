import React from 'react'
import HeaderForms from '../components/HeaderForms'
import { Outlet } from "react-router-dom";

const LayoutNavForms = () => {
  return (
    <div>
      <HeaderForms></HeaderForms>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default LayoutNavForms
