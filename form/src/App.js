import './App.css';

import { inputName, inputEmail } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const name = useSelector((state) => state.name)
  const email = useSelector((state) => state.email)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <form>
        
        <h1 style={{marginTop: "60px", marginBottom: "20px"}}>Input</h1>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input input-info input-bordered text-black"
            onChange={(e) =>
              dispatch(inputName(e.target.value))
            }
          />

          <input 
            type="text"
            id="email"
            placeholder="Email"
            className="input input-info input-bordered mx-4 text-black "
            onChange={(e) =>
              dispatch(inputEmail(e.target.value))
            }
          />
          <div className="data">
          <h2 style={{textAlign: "center"}}> Data </h2>
          <p>Username: <span className="text-gray-700 text-2xl">{name}</span> </p>
          <p>Email: <span className="text-gray-700 text-2xl">{email} </span></p>
          </div>
          
      </form>
    </div>
      );
}

      export default App;
