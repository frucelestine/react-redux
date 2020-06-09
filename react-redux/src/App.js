import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import DashBoard from './components/dashBoard/DashBoard';
import NavBar from './components/layout/NavBar';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/" component={DashBoard}/>
    </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
