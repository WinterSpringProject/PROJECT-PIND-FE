import React from 'react';
import './NavBar.scss';
import MenuContainer from '../../containers/MenuContainer';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className = "NavBar">
			<Link to="/">
				<div className = "NavBar-logo">LXGX</div>
			</Link>
			<MenuContainer />
			<div className = "NavBar-login">
				<div className = 'NavBar-login box'>로그인</div>
				<div className = 'NavBar-login box'>회원가입</div>
			</div>
		</div>
	);
};

export default NavBar;
