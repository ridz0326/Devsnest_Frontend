import "./Card.css";
import React, { useState } from 'react';

function Card(props) {

    const [isEdit, setisEdit] = useState(false);
    const [food, setFood] = useState(props.food);
    const [calorie, setCalorie] = useState(props.calorie);

     return (
        <>
            <div className="card">
                {isEdit ? (
                    <input
                        className="edit_input"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />
                ) : (
                    <h2 className="food">{food}</h2>
                )}
                {isEdit ? (
                    <input
                        className="edit_input"
                        value={calorie}
                        onChange={(e) => setCalorie(e.target.value)}
                    />
                ) : (
                    <p className="info">You have consumed {calorie} calories</p>
                )}
                <div className="buttons">
                    <button
                        className="btn"
                        id="delete"
                        onClick={props.handleDelete}>
                        Delete
                    </button>
                    <button
                        className="btn"
                        id="edit"
                        onClick={() => (isEdit ? setisEdit(false) : setisEdit(true))}
                    >
                        {isEdit ? "Save" : "Edit"}

                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;