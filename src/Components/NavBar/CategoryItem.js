import React from 'react';
import './NavBar-click.scss';

const CategoryItem = ({CategoryList}) => {
	const { name, text, click } = CategoryList;

	return (
		<div	className = { click ? 'NavBar-click' : 'NavBar-unclick' }>
			{text}
		</div>
	);
};
export default CategoryItem;
