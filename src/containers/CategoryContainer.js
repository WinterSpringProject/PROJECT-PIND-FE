import React from 'react';
import { connect } from 'react-redux';
import { selectMenu } from '../modules/category';
import CategoryList from '../components/NavBar/CategoryList';

const CategoryContainer = ( {selected, categories, selectMenu} ) => {
	return (
		<CategoryList 
			selected = {selected}
			categories={categories}
			selectMenu={selectMenu}
		/>
	);
};

export default connect(
	({ category }) => ({
		selected: category.selected,
		categories: category.categories,
	}),
	{
		selectMenu,
	}
)(CategoryContainer);
