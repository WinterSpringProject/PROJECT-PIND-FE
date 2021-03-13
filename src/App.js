import React, { useState } from 'react';
import CardViewTemplate from './components/CardView/CardViewTemplate';
import CardViewList from './components/CardView/CardViewList';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import mockCard from './components/CardView/CardViewMock';
import TopView from './components/Top/TopView';

const App = () => {
	const [cards, setCards]=useState(()=>(mockCard))
	return (
		<div>
			<NavBar />
			<TopView />
			<CardViewTemplate>
				<CardViewList cards={cards}/>
			</CardViewTemplate>
		</div>
	);
}

export default App;
