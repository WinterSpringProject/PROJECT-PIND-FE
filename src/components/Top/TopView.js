import React from 'react';
import './TopView.scss';
import CategoryContainer from '../../containers/CategoryContainer';
import ButtonRight from '../../images/Topview_button_right.png';
import ButtonLeft from '../../images/Topview_button_left.png';


const TopView = () => {

	return (
		<div className = "TopView">
			<div className = "list">
				<img className = "list-button" src = {ButtonLeft} alt = "ButtonLeft"/>
				{/*<div className = "list-button">Left Button</div>*/}
				<CategoryContainer />
				{/*<div className = "list-button">Right Button</div>*/}
				<img className = "list-button" src = {ButtonRight} alt = "ButtonRight"/>
			</div>
			{/*<div>
				<div className = "searchBar">
					<input className = "searchBar-input"/>
					<button className = "searchBar-summit">Search</button>
				</div>
			</div>*/}
		</div>
	);
};

export default TopView;
