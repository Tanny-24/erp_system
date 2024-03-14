import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <div className="bg-sky-200">SideBar</div>
        <div className='bg-teal-200'>TopBar</div>
        <div>{<Outlet/>}</div>
    </div>
  )
}
