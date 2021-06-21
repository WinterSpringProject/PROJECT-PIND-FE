import React from 'react';
import './NavBar.scss';
import MenuContainer from '../../containers/MenuContainer';
import { Link } from 'react-router-dom';
import PIND_logo from '../../PIND_logo.svg';

const NavBar = () => {
	return (
		<div className = "NavBar">
			<div className = "wrap">
			<Link to="/">
				<div className = "NavBar-logo">
					<img className = "NavBar-imag" src={PIND_logo} alt="Logo_image"/>
				</div>
			</Link>
			<div className = "NavBar-container"><MenuContainer /></div>
			<div className = "NavBar-login">
				<Link to="/login" className="NavBar-link"><div className = "NavBar-login box">Log in</div></Link>
				<Link to="/signup" className="NavBar-link"><div className = "NavBar-login box">Sign up</div></Link>
			</div>
			</div>
		</div>
	);
};

export default NavBar;
