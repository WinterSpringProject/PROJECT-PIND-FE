import React from 'react';
import './NavBar.scss';

const CategoryItem = ({ selected, categories, selectMenu }) => {
	const { name, text, click } = categories;

	return (
		<div 
			onClick={() => selectMenu(name)}
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
					categories = {category}
					key = {category.name}
					selectMenu={selectMenu}
				/>
			))}
		</div>
	);
};

export default CategoryList;
