
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateGroup from './components/CreateGroup';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/admin/creategroup">
        <CreateGroup />
      </Route>
    </Switch>
  )
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
