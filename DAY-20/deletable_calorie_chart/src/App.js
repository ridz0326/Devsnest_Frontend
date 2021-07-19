import './App.css';
import Card from './Component/card';
import React, {useState} from 'react';

const foodInfo = [
    {food: "Pizza", calorie: "56"},
    {food: "Burger", calorie: "68"},
    {food: "Macaroni", calorie: "49"},
    {food: "Pani-puri", calorie: "60"},
    {food: "Samosa", calorie: "50"}
]

function App(props) {
    const [cards, setCards] = useState(foodInfo);
      return(
        <>
        <center><h1>Calorie Read Only</h1></center>
        <div className="wrapper">
            {(cards.length > 0)? 
            cards.map((val, index) => 
            <Card food={val.food} calorie={val.calorie} key={index} vals={cards} index={index} setCards={setCards} />
            ): <h2 className="nothing">No Entry Found </h2>
            }
        </div>
        </>
    )
}

export default App;
