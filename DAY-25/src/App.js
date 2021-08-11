import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <div className="nav absolute top-0 bg-cover w-full ">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/login' component={Login} />
      {/* <Route path='/about' component={About} />
      <PrivateRoute path='/dashboard' component={Dashboard} /> */}
      </Switch>
    </div>   
    </div>
  );
}

export default App;
