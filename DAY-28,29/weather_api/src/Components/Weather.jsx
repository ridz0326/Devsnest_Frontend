import React,{useState, useEffect}  from "react";

const Weather = () => {
    const [weatherData, setWeatherData] = useState("");
    const [city, setCity] = useState("Delhi");
    const [search , setSearch] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setCity(search);
        setSearch("");
        
    }
    
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=b32ecae00da34bf5b61100616211409&q=${city}&aqi=no`)
            .then(response => response.json())
            .then(data => {setWeatherData(data);
                console.log(data);
                console.log(weatherData);
            });

        }, [city]);
        
    return(
        <>
        <form>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
            
        </form>
       <h1>{ weatherData ? 
       <>
       <h3>City: {weatherData.location.name}</h3>
       <p>Temperature: {weatherData.current.temp_c}°C</p>
        </>
       : "Loading..."}</h1>
        </>
        )
}

export default Weather;



