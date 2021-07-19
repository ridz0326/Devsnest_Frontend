import React from 'react'
// import App from '../App';

function Card({food,calorie,vals,index,setCards}) {  
    return(
        <div className="card">
            <h2>{food}</h2><br/>
            <h4>You have consumed {calorie} calories</h4>
            <button onClick = {() => {
                setCards(vals.filter(el => (el.food!==vals[index].food)))
            }}
            >Delete</button>
        </div>
    );
}

export default Card;