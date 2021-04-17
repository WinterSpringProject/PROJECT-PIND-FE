import React from 'react';
import CardViewList from './components/CardView/CardViewList';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import TopView from './components/Top/TopView';
import InfoList from './components/Infomation/InfoList';
import { Route } from 'react-router-dom';
import ProjectDetail from './components/Project/ProjectDetail';

const App = () => {

  return (
    <div>
      <NavBar />
      <Route path="/" component={InfoList} exact={true} />
      <Route path="/" component={TopView} exact={true} />
      <Route path="/" component={CardViewList} exact={true} />
      <Route path="/project/:id" component={ProjectDetail}/>
    </div>
  );
}

export default App;
