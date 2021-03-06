import React, { useState } from 'react';
import CardViewTemplate from './components/CardView/CardViewTemplate';
import CardViewList from './components/CardView/CardViewList';
import './App.css';
import mockCard from './components/CardView/CardViewMock';

const App = () => {
  const [cards, setCards]=useState(()=>(mockCard))
  return (
    <div>
      <CardViewTemplate>
        <CardViewList cards={cards}/>
      </CardViewTemplate>
    </div>
  );
}

export default App;
