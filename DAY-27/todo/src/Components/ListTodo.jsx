import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {removeItem} from '../Actions/index'; 
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const ListTodo = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      
    //   export default function IconLabelButtons() {
        const classes = useStyles();


    return (
        <div className="list">
            {todos.map((todo, index) => (
                <div className="todo">
                  <p>{todo.title}</p>
                  <Button 
                  variant="contained"
                  color="secondary"
                  style={{height: "40px", width: '100px'}}
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                      dispatch(removeItem(index))
                  }}>DELETE</Button>
                  
                </div>
            ))}
        </div>
    );
};  

export default ListTodo;