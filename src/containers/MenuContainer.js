import React from 'react';
import { connect } from 'react-redux';
import { selectMenu } from '../modules/menu';
import MenuList from '../components/NavBar/MenuList';

const MenuContainer = ( {selected, menus, selectMenu} ) => {
	return (
		<MenuList 
			selected = {selected}
			menus={menus}
			selectMenu={selectMenu}
		/>
	);
};

export default connect(
	({ menu }) => ({
		selected: menu.selected,
		menus: menu.menus,
	}),
	{
		selectMenu,
	}
)(MenuContainer);
