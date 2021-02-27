import React, { useState } from 'react';
import './NavBar.scss';
import CategoryList from './CategoryList.js';

const NavBar = () => {
	const [navCategory, setNavCategory] = useState([
		{
			name: 'theme',
			text: '주제별',
			click: true
		},
		{
			name: 'local',
			text:	'지역별',
			click: false
		}
	]);

	return (
		<div className = "NavBar">
			<div>
				<CategoryList navCategory = { navCategory }/>
			</div>
			<div className = "NavBar-login">
				<div>로그인</div>
				<div>회원가입</div>
			</div>
		</div>
	);
};

export default NavBar;
