import React from "react";
import FollowersCard from "./FollowersCard";

const Card = props => {
  return (
    <div>
      <img src={props.user.avatar_url} alt={`This is ${props.user.name}`} />
      <h1>This is: {props.user.name}</h1>
      <p>User Name : {props.user.login}</p>
      <h4>Location : {props.user.location}</h4>
      <h3>And these {props.user.name}'s Followers:</h3>
      <FollowersCard />
    </div>
  );
};

export default Card;
