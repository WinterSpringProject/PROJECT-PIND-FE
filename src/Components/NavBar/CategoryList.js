import React from 'react';
import CategoryItem from './CategoryItem.js';

const CategoryList = ({navCategory}) => {
	return (
		<div>{navCategory.map(CategoryList => (
			<CategoryItem	CategoryList = { CategoryList }
										key = { CategoryList.name }/>
		))}</div>
	);
};

export default CategoryList;
