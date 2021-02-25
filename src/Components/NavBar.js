import React from 'react';
import '../scss/NavBar.scss';

const NavBar = () => {
	return (
		<div className = "NavBar">
			<div className = "NavBar-Menu">
				<div>Logo</div>
				<div>
					<div>주제별</div>
					<div>지역별</div>
				</div>
			</div>
			<div>
				<div>로그인</div>
				<div>회원가입</div>
			</div>
		</div>
	);
};

export default NavBar;
