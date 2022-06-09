import React from 'react'

function Navbar() {
	return (
		<nav>
			<div className="nav--title">
				<img
					src='/images/nav-logo.svg'
					alt=''
					className="nav--logo"
				/>
				<span className="nav--text">
				my travel journal.
			</span>
			</div>
		</nav>
	)
}

export default Navbar