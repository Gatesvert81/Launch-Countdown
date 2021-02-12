import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card" >
            <div className="card-time" >
                <span>{props.number}</span> 
            </div>
            <div className="card-text" >
                {props.title}
            </div>
        </div>
    )
}

export default Card
