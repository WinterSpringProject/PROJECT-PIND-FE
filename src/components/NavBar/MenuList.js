import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const MenuItem = ({ selected, menu, selectMenu }) => {
	const { name, text } = menu;

	const onClickMenu = () => {
		selectMenu(name);
	}

	return (
		<div
			onClick={onClickMenu}
			className={`NavBar-click ${selected === name ? 'selected' : ''}`}>
			{text === '새프로젝트' && <Link to="/newproject" className="NavBar-link">{text}</Link>}
			{text === '주제별' && <Link to="/" className="NavBar-link">{text}</Link>}
			{text === '지역별' && text}
		</div>
	);
};

const MenuList = ({ selected, menus, selectMenu }) => {
	return (
		<div className='NavBar-category'>
			{menus.map(menu => (
				<MenuItem
					selected = {selected}
					menu = {menu}
					key = {menu.name}
					selectMenu={selectMenu}
				/>
			))}
		</div>
	);
};

export default MenuList;
