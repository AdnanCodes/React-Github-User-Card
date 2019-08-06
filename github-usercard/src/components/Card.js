import React from "react";

const Card = props => {
  return (
    <div>
      <h1>Real Name : {props.user.name}</h1>
      <p>User Name : {props.user.login}</p>
      <h4>Location : {props.user.location}</h4>
    </div>
  );
};

export default Card;
