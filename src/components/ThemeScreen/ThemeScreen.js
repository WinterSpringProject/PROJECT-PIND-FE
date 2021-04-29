import React from 'react';
import CardViewList from '../CardView/CardViewList';
import NewProject from '../NewProject/NewProject';
import TopView from '../Top/TopView';

const ThemeScreen = () => {
	return (
		<div>
			<TopView />
			<CardViewList />
			<NewProject />
		</div>
	);
};

export default ThemeScreen;
