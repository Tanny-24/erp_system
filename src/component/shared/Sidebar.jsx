import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBiohazard } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
// import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../Lib/const/navigation'


const linkClasses =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
	export default function Sidebar() {
		return (
			<div className=" flex bg-neutral-900 w-60 p-3  flex-col">
				<div className="flex items-center gap-2 px-1 py-3">
					<FcBiohazard fontSize={24} />
					<span className="text-neutral-200 text-lg">ERP System</span>
				</div>
				<div className="flex-1  py-8 felx felx-col gap-0.5">
					{DASHBOARD_SIDEBAR_LINKS.map((item) => (
						<SidebarLink key={item.key} item={item} />
					))}
				</div>
				
			</div>
			
		)
	}
	 function SidebarLink({item}){
		const { pathname } = useLocation();
		return(
			<Link to={item.path} className={classNames( pathname=== item.path? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
				<span className="text-xl">{item.icon}</span>
				{item.label}
			</Link>
		)
	 }