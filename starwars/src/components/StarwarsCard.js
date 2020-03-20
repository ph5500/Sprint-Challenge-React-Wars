import React from "react";
import axios from "axios";
import styled from "styled-components";
// import styled from "styled-components";

function StarwarsCard(props) {
    return (
        <Container key={props.id}>

            <img className="picture" src={props.hometown} alt={"Hometown"}></img>
            <P>
                <p>Name: {props.character_name}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair Color: {props.hair_color}</p>
                <p>Skin Color: {props.skin_color}</p>
                <p>Eye Color: {props.eye_color}</p>
                <p>Birth year: {props.birth_year}</p>


            </P>




        </Container>
    );
};

export default StarwarsCard;


const Container = styled.div`
font-size: 16px;

`;

const P = styled.p`
border:solid black 40px;
border-bottom-color:#ffe;
border-left-color:#eed;
border-right-color:#eed;
border-top-color:#ccb;
color: black;

`;