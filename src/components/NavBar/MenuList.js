import React from 'react';
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
			{text}
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
