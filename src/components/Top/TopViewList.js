import React from 'react';
//import imgSample from './imgSample.svg'
import imgSample from '../../images/categoryimg/programming.jpeg'
import './TopView.scss';

const TopViewItem = ({selected, category, selectCategory}) => {
	const { text } = category;

	const onClickCategory = () => {
		selectCategory(text);
	}

	return (
		<div
			onClick={onClickCategory}
			className = "list-item">
			<img className = "list-img" src = {imgSample} alt = "이미지를 불러 올 수 없습니다."/>
			<div className = "list-text">{ text }</div>
		</div>
	);
};

const TopViewList = ( { selected, categories, selectCategory } ) => {
	return (
		<div className = "list-align">
			{ categories.map(category => (
				<TopViewItem
					selected = {selected}
					category = { category }
					key = { category.name }
					selectCategory={selectCategory} />
			))}
		</div>
	);
};

export default TopViewList;
