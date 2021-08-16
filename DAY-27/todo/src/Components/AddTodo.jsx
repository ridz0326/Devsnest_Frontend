import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addItem} from '../Actions/index'; 
import { Input, Button } from '@material-ui/core';


const AddTodo = () => {
    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <Input
                className="inp"
            style={{padding:"5px", fontWeight: "bold", fontSize: "larger",fontFamily:'Roboto Slab, serif'
            }}
                type="text" 
                placeholder="Add To-Do.." 
                value={item}
                onChange={(e) =>{
                    setItem(e.target.value)
                }}
                />
            <Button 
            variant="contained"
            color="primary"
            style= {{padding: "8px 20px"}}
            onClick={() => {
                dispatch(addItem({
                    title: item,
                    done: false,
                }))
                setItem(" ")
                console.log(item)
                }}>ADD</Button>
            
        </div>
    )
}

export default AddTodo;