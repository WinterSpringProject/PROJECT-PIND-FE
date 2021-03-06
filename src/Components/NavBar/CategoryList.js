import React from 'react';
import CategoryItem from './CategoryItem.js';
import './NavBar.scss';

const CategoryList = ( {navCategory} ) => {
	return (
			<div className = 'NavBar-category'>{navCategory.map(categoryList => (
				<CategoryItem	categoryList = { categoryList }
											key = { categoryList.name }/>
			))}
		</div>
	);
};

export default CategoryList;
