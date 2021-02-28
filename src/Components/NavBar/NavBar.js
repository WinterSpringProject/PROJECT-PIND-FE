import React, { useState } from 'react';
import './NavBar.scss';
import CategoryList from './CategoryList.js';
import mocNavCategory from './mocNaviCategory.js'

const NavBar = () => {
	const[navCategory, setNavCategory] = useState(() => mocNavCategory)

	return (
		<div className = "NavBar">
			<div className = "NavBar-logo">LXGX</div>
			<div><CategoryList navCategory = { navCategory }/></div>
			<div className = "NavBar-login">
				<div className = 'login-box'>로그인</div>
				<div className = 'login-box'>회원가입</div>
			</div>
		</div>
	);
};

export default NavBar;
