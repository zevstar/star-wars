import React, { useState, useEffect } from "react";
import axios from "axios";

const SwApi = () => {
  const [shipData, setShipData] = useState([]);

  const fetchShip = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships/");

      console.log(response.data);
      setShipData(response.data.results);
    } catch (error) {
      console.error(error);
    }  
  };

  useEffect(() => {
      fetchShip()
  }, [])



  return (
    <div className = 'cards-container'>
      {
      shipData.map((ship) => {
        return (
            <div className='cards' key = {ship.name}>

        <h1>Name: {ship.name}</h1>
        <h3>Model: {ship.model}</h3>
        <h3>Manufacturer: {ship.manufacturer}</h3>
        <h3>Crew: {ship.crew}</h3>
        <h3>Passenger Number: {ship.passengers}</h3>


            </div>
        )
      })}
      {/* <button onClick={fetchShip}>Press Me</button> */}
    </div>
  );
}

export default SwApi;
