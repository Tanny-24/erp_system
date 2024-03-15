import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	
} from 'react-icons/hi'
import { IoCalendarClearOutline } from "react-icons/io5";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/Orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'calender',
		label: 'Calender',
		path: '/Calender',
		icon: <IoCalendarClearOutline />
	},
	
]
