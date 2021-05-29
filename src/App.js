import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Route } from 'react-router-dom';
import ProjectDetail from './components/Project/ProjectDetail';
import ThemeScreen from './components/ThemeScreen/ThemeScreen';
import InputForm from './components/NewProject/InputForm';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

const App = () => {

  return (
    <div>
      <NavBar />
      <Route path="/" component={ThemeScreen} exact={true} />
      <Route path="/project/:id" component={ProjectDetail}/>
			<Route path="/newproject" component={InputForm} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
