import React from 'react';
import CardViewTemplate from './components/CardView/CardViewTemplate';
import CardViewList from './components/CardView/CardViewList';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import TopView from './components/Top/TopView';
import InfoList from './components/Infomation/InfoList';

const App = () => {

  return (
    <div>
      <NavBar />
      <InfoList />
      <TopView />
      <CardViewTemplate>
        <CardViewList />
      </CardViewTemplate>
    </div>
  );
}

export default App;
