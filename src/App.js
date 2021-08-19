
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateGroup from './components/CreateGroup';

import Home from './components/Home';
import useToken from './components/useToken';
import { useEffect } from 'react';


const Routing = ({token, setToken}) => {

  const history = useHistory();

  if(token === null || token === undefined || token === "null") {
    history.push('login');
    // return (
    // <>
    //   <Login setToken={setToken} />
    // </>
    // )
  }

  return (
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login" render={() => <Login setToken={setToken} /> }/>
      {/* <Route path="/login">
        <Login />
      </Route> */}
      <Route path="/admin/creategroup">
        <CreateGroup />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  )
};

function App() {

  const { token, setToken } = useToken(null);

  // useEffect(() => {
  //   setToken(token);
  // }, [token]);
  
  return (
    <>
      <BrowserRouter>
        <NavbarComponent token={token} setToken={setToken}/>
        <Routing token={token} setToken={setToken}/>
      </BrowserRouter>
    </>
  );
}

export default App;
