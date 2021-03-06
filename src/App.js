import React, { useState } from 'react';
import CardViewTemplate from './components/CardView/CardViewTemplate';
import mockCard from './components/CardView/CardViewMock';
import CardViewList from './components/CardView/CardViewList';
import NavBar from './components/NavBar/NavBar';
import './App.css';


const App = () => {
  const [cards, setCards]=useState(()=>(mockCard))
  return (
    <div>
      <NavBar />
      <CardViewTemplate>
        <CardViewList cards={cards}/>
      </CardViewTemplate>
    </div>
  );
}

export default App;
