import React from 'react'

function Card(props) {
    return(
        <div className="card">
            <h2>{props.food}</h2><br/>
            <h4>You have consumed {props.calorie} calories</h4>
        </div>
    );
}

export default Card;