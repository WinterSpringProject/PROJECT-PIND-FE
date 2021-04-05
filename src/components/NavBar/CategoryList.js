import React from 'react';
import './NavBar.scss';

const CategoryItem = ({ selected, category, selectMenu }) => {
	const { name, text } = category;
	
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

const CategoryList = ({ selected, categories, selectMenu }) => {
	return (
		<div className='NavBar-category'>
			{categories.map(category => (
				<CategoryItem	
					selected = {selected}
					category = {category}
					key = {category.name}
					selectMenu={selectMenu}
				/>
			))}
		</div>
	);
};

export default CategoryList;
