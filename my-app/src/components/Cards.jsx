import React from "react";
import "./Cards.css";

function Card(props){
    
    return(
        <div className="container">
            <figure className="card-img">
                <img src={props.pic} alt="" />
            </figure>
            <div className="card-details">
                <h2>Name: {props.name}</h2>
                <h3>Subjects: {props.subjects}</h3>
                <p>{props.description}</p>
                <h5>
                    Youtube Link:{" "}
                    {/* Use the anchor tag (a) to create a link */}
                    <a href={props.ytLinks} target="_blank" rel="noopener noreferrer">
                        {props.ytLinks}
                    </a>
                </h5>
            </div>
        </div>
    )
}

export default Card;