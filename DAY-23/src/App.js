import './App.css';
import {useState, useEffect} from 'react';



const App = () => {

  const [name, setName] = useToggle()

  useEffect(() => {
    document.title = `Hey ${name}`
  }, [name])

  return (
    <div className="App">
      <h1>Hello</h1>
      <button 
        className="btn" 
        onClick={() => setName('Ridhima')}
      >
        Change Name
      </button>
      <p>{name}</p>
    </div>
  );
}

const useToggle = () => {
  const[name, setName ] = useState('ridz');
  return [name, setName]
}

export default App;
