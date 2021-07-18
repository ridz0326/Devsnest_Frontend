import './App.css';
import Btn from './Components/Button';

function Box(props) {
  if(props.alter) {
    return(
      <div className="box" style={{backgroundColor:props.i%2===0? "black" : "white"}}>

      </div>
    )
  }else {
    return(
      <div className="box" style={{backgroundColor:props.i%2===0? "white" : "black"}}>

      </div>
    )
  }
}

function App() {
  let alter = true;
  return (
    <div className="App">
      <div className="wrapper">
        {[...Array(64)].map((box, i) => {
          if (i%8===0 && i!==0){
            alter = !alter
          }
          return <Box i={i} alter={alter}/>
        })}
      </div>
      <div className='buttons'>
        <Btn/>
        <Btn/>
        <Btn/>
        <Btn/>
      </div>
    </div>
  );
}

export default App;
