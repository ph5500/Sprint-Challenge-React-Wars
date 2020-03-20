// import React, { useState, useEffect } from 'react';
// import './App.css';
// import axios from "axios";
// // import StarwarsCard from "./components/StarwarsCard";
// // import styled from "styled-components";


// export default function Hometown() {
//     const [home, setHome] = useState([]);

//     useEffect(() => {
//         axios
//             .get(`https://swapi.co/api/planets`)
//             .then(response => {
//                 console.log(response.data.hometown);
//                 setHome(response.data.hometown);
//             })
//             .catch(error => {
//                 // console.log(error);
//             });
//     }, []);

//     return (
//         <div className="Hometown">


//             {films.map((charsData, index) => {
//                 // console.log(charsData);
//                 return (
//                     <StarwarsCard
//                         //insert StarwarsCard here with <StarwarsCard

//                         key={index}

//                         hometown={charsData.hometown}


//                     />
//                 )
//             })}
//         </div>
//     );
// }


// function HometownCard(props) {
//     return (
//         <Container key={props.id}>

//             <img className="picture" src={props.hometown} alt={"Hometown"}></img>





//         </Container>
//     );
// };