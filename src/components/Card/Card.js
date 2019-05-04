import React from "react";
import "./Card.css";

const Card = props => {
    console.log(props.image)
  return (<div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
    </div>
  </div>)
};

export default Card;