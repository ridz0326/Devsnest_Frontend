import { Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <div className="App">
      <>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </>
    </div>
  );
}

export default App;
