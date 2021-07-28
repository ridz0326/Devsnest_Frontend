import './App.css';
import React, { useState } from 'react'
import Card from './Components/Card';


function App() {

  const [food, setFood] = useState("");
  const [calorie, setCalorie] = useState("");
  const [cards, setCards] = useState([]);

  function handleClick(e) {
    // console.log(e)
    e.preventDefault();
    cards.push({ food, calorie, index: cards.length })
    setCards(cards)
    console.log(cards)

    setFood("");
    setCalorie("");
  }

  function handleDelete(index){
    setCards(
      cards.filter((card) => {
        return card.index !== index;
      })
    );
  }

  return (
    <>
      <form className="form">
        <div className="wrapper">
          <div className="inputs">
            <input
              type="text"
              name="name"
              id="name"
              value={food}
              placeholder="Item Name"
              onChange={(e) => setFood(e.target.value)}
              required
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Calorie Amount"
              value={calorie}
              onChange={(e) => setCalorie(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="submit"
            onClick={handleClick}
          >
            ADD ITEM
          </button>
        </div>
      </form>

      <div className="items">
        {cards.map((data) => (
          <Card
            key={data.index}
            food={data.food}
            calorie={data.calorie}
            handleDelete={() => handleDelete(data.index)}
          />
        ))}
      </div>

    </>
  );
}

export default App;


