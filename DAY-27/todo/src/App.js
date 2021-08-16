import './App.css';
import AddTodo from './Components/AddTodo';
import ListTodo from './Components/ListTodo';



function App() {

  return (
    <div className="App">
     <h1>Todo List</h1>
     <AddTodo/>
     <ListTodo/>
    </div>
  );
}

export default App;
