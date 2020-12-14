import React, {useState, useEffect} from 'react'
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import { debounce } from "../utils"

export const Header = ({title}) => {
	const { pathname } = useLocation();
	const [ headerScrolled, setHeaderScrolled] = useState(false)
	
	const checkScroll = () => {
		console.log("A tope!")
		if (document.documentElement.scrollTop > 75) {
			setHeaderScrolled(true)
		} else {
			setHeaderScrolled(false)
		}
	}

	useEffect(() => {
		return window.addEventListener('scroll', debounce(checkScroll, 10))
	}, [])

	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = pathname === rootPath
	const isAbout = pathname === `${rootPath}about`
	console.log(headerScrolled)
	return ( 
		<header className={`main-header ${headerScrolled ? "small" : ""}`}>
			{isRootPath ?  (
				<h1 className="main-heading">
					<Link to="/">{title}</Link>
				</h1>
			) : (
				<Link className="header-link-home" to="/">
					{title}
		  		</Link>
			)
			}
			<nav className="site-navigation">
				<ul>
					{isAbout && <li><a href="/">Blog</a></li>}
					{!isAbout && <li><a href="https://github.com/peoplenarthax">About me</a></li>}
				</ul>
			</nav>
		</header>
	)
}