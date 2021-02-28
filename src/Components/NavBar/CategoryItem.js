import React from 'react';
import './NavBar.scss';

const CategoryItem = ({categoryList}) => {
	const { name, text, click } = categoryList;

	return (
		<div className = 'NavBar-click'>{text}</div>
	);
};
export default CategoryItem;
