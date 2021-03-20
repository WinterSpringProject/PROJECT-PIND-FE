import React from 'react';
import imgSample from './imgSample.svg'

const TopViewItem = ({topViewList}) => {
	const { name, text, click } = topViewList;

	return (
		<div className = "list-item">
			<img className = "list-img" src = {imgSample} alt = "이미지를 불러 올 수 없습니다."/>
			<div className = "list-text">{ text }</div>
		</div>
	);
};

export default TopViewItem;
