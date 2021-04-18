import React from 'react';
import './TopView.scss';
import CategoryContainer from '../../containers/CategoryContainer';

const TopView = () => {

	return (
		<div className = "TopView">
			<div className = "list">
				<div className = "list-button">Left Button</div>
				<CategoryContainer />
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
