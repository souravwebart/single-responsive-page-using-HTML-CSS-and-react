import React from 'react';
import '../index.css';

function card(props) {
    return (
        <div className="card">
        <div className="imagesection">
        <img className="cardimage" src={props.img} alt="about sourav"></img>
        </div>
        <div className="cardTitle">
        <h1>{props.name}</h1>
        </div>
            
        </div>
    )
}

export default card;
