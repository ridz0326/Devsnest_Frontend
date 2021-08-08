import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import PrivateRoute from './Components/PrivateRoute'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import LoginContextProvider from './Components/LoginContext';



function App() {

  // const [login, setLogin] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const Loading = () => {
  //   return new Promise((resolve) => { setTimeout(resolve, 1000) })
  // }

  return (
    <LoginContextProvider>
    <div className="App">
      <>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/profile' component={Profile} />
          {/* {login ? (
            <>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/profile' component={Profile} />
            </>
          ) : (
            <>
              <Route path='/dashboard' component={Dashboard} > <Redirect to="/" /> </Route>
              <Route path='/profile' component={Profile}> <Redirect to="/" /> </Route>
            </>
          )} */}
        </Switch>
        {/* {loading ? "Loading..." :
          <button 
          onClick={() => {  
            setLoading(!loading)
            Loading().then(() => {
              setLogin(!login)
              setLoading(false)
            }) }}
            >
            {login ? "Logout" : "Login"}</button>
          } */}
      </>
    </div>
    </LoginContextProvider>
  );
}



export default App;
