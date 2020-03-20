import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import StarwarsCard from "./components/StarwarsCard";
import styled from "styled-components";

// const App = () =>
export default function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response.data.results);
        setFilms(response.data.results);
      })
      .catch(error => {
        // console.log(error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>React Wars</Header>

      {films.map((charsData, index) => {
        // console.log(charsData);
        return (
          <StarwarsCard
            //insert StarwarsCard here with <StarwarsCard

            key={index}

            hometown={charsData.hometown}

            character_name={charsData.name}
            height={charsData.height}
            mass={charsData.mass}
            gender={charsData.gender}
            hair_color={charsData.hair_color}
            skin_color={charsData.skin_color}
            eye_color={charsData.eye_color}
            birth_year={charsData.birth_year}


          />
        )
      })}
    </div>
  );
}


const Header = styled.h1`
font-size: 40px;
`;