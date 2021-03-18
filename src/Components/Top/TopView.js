import React, { useState } from 'react';
import './TopView.scss';
import mocTopView from './mocTopView';
import TopViewList from './TopViewList';

const TopView = () => {
	const[TopViewData, setTopView] = useState(() => mocTopView)

	return (
		<div className = "TopView">
			<div className = "list">
				<div className = "list-button">Left Button</div>
				<div className = "list-box"><TopViewList TopViewData = { TopViewData }/></div>
				<div className = "list-button">Right Button</div>
			</div>
			<div>
				<div className = "searchBar">
					<input className = "searchBar-input"/>
					<button className = "searchBar-summit">Search</button>
				</div>
			</div>
		</div>
	);
};

export default TopView;
