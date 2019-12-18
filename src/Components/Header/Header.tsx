import React from "react"

import  { NavLink } from "react-router-dom"

export const Header = () => {
	return <header>
		<NavLink to="/" > <img src="./images/header-weather-icon.jpg" alt="" /> </NavLink>
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/favorites">Favorites</NavLink></li>
			</ul>
		</nav>
	</header>
}