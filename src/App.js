import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Route } from 'react-router-dom';
import ProjectDetail from './components/Project/ProjectDetail';
import ThemeScreen from './components/ThemeScreen/ThemeScreen';

const App = () => {

  return (
    <div>
      <NavBar />
      <Route path="/" component={ThemeScreen} exact={true} />
      <Route path="/project/:id" component={ProjectDetail}/>
    </div>
  );
}

export default App;
