import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
        <Sidebar/>
        <div>
          <Header/>
        <div className="p-4">
        <div>{<Outlet/>}</div>
        </div>

        </div>
       
    </div>
  )
}
