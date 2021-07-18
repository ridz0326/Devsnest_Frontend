import './App.css';
import Card from './Component/card';

const foodInfo = [
    {food: "Pizza", calorie: "56"},
    {food: "Burger", calorie: "68"},
    {food: "Macaroni", calorie: "49"},
    {food: "Pani-puri", calorie: "60"},
    {food: "Samosa", calorie: "50"}
]

function App() {
    return(
        <>
        <center><h1>Calorie Read Only</h1></center>
        <div className="wrapper">
            {foodInfo.map((val, index) => {
                return(
                    <Card food={val.food} calorie={val.calorie} key={index}/>
                )
            })}
        </div>
        </>
    )
}

export default App;
