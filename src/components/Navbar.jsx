import React from 'react';
import logo from '../assets/logo.svg';

const navigationLinks = ['Home', 'Blog', 'About'];
function Navbar() {
	return (
		<div className="w-full bg-primary_light flex text-primary_dark font-bold text-xl justify-between py-5 shadow-main px-20">
			<img src={logo} alt="logo" />
			<ul className="w-1/2 flex justify-between">
				{navigationLinks.map((link) => (
					<li key={link}>{link}</li>
				))}
				<button type="button">Contact</button>
			</ul>
		</div>
	);
}

export default Navbar;
