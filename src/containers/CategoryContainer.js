import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../modules/category';
import TopViewList from '../components/Top/TopViewList';

const CategoryContainer = ( {selected, categories, selectCategory} ) => {
	return (
		<TopViewList 
			selected = {selected}
			categories={categories}
			selectCategory={selectCategory}
		/>
	);
};

export default connect(
	({ category }) => ({
		selected: category.selected,
		categories: category.categories,
	}),
	{
		selectCategory,
	}
)(CategoryContainer);
