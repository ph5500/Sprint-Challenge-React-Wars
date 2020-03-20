import React from "react";
// import styled from "styled-components";

function StarwarsCard(props) {
    return (
        <div className="Container">
            <img src={props.starwarsChars} alt={"StarWars Characters"} />




        </div>
    );
};

export default StarwarsCard;