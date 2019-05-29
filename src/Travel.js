import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.destination} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.country}</cite>
      <br></br>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;