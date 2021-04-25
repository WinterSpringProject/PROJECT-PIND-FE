import React from 'react';
import CardViewList from '../CardView/CardViewList';
import InputForm from '../NewProject/InputForm';
import TopView from '../Top/TopView';

const ThemeScreen = () => {
	return (
		<div>
			<TopView />
			<CardViewList />
			<InputForm />
		</div>
	);
};

export default ThemeScreen;
