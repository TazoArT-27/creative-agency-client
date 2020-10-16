import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Order/ServiceList/ServiceList';
import AddService from './components/AddService/AddService/AddService';
import Review from './components/Order/Review/Review';
import UsersList from './components/Order/UsersList/UsersList'
import MakeAdmin from './components/AddService/MakeAdmin/MakeAdmin';
import Purchase from './components/Purchase/Purshase/Purchase';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [signOutUser, setSignOutUser] = useState({});
  const [card, setCard] = useState({});
  return (
    <UserContext.Provider value={([loggedInUser, setLoggedInUser], [signOutUser, setSignOutUser], [card, setCard])}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/purchase">
          <Purchase></Purchase>
        </Route>
        <PrivateRoute exact path="/order">
          <Order></Order>
        </PrivateRoute>
        <Route path="/order/:id" >
            <Order />
          </Route>
        <Route exact path="/usersList">
          <UsersList></UsersList>
        </Route>
        <Route exact path="/list">
          <ServiceList></ServiceList>
        </Route>
        <Route exact path="/review">
          <Review></Review>
        </Route>
        <Route exact path="/addService">
          <AddService></AddService>
        </Route>
        <Route exact path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
