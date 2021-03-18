import React from 'react';
import imgSample from './imgSample.svg'

const TopViewItem = ({topViewList}) => {
	const { name, text, click } = topViewList;

	return (
		<div className = "list-item">
			<img className = "list-img" src = {imgSample} alt = "img"/>
			<div className = "list-text">{ text }</div>
		</div>
	);
};

export default TopViewItem;
