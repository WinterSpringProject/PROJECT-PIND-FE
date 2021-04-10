import React from 'react';
import './NavBar.scss';
import MenuContainer from '../../containers/MenuContainer';

const NavBar = () => {
	return (
		<div className = "NavBar">
			<div className = "NavBar-logo">LXGX</div>
			<MenuContainer />
			<div className = "NavBar-login">
				<div className = 'NavBar-login box'>로그인</div>
				<div className = 'NavBar-login box'>회원가입</div>
			</div>
		</div>
	);
};

export default NavBar;
