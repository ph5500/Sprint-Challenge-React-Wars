import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import StarwarsCard from "./components/StarwarsCard";

// const App = () =>
export default function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("http https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setFilms(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {films.map((charsData, index) => {
        console.log(charsData);
        return (
          <StarwarsCard
            //insert StarwarsCard here with <StarwarsCard

            key={index}

            character={charsData.name}
            height={charsData.height}
            mass={charsData.mass}


          />
        )
      })}
    </div>
  );
}
