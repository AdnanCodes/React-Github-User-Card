import React from "react";
import axios from "axios";

class FollowersCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    this.fetchFollowers();
  }
  fetchFollowers = () => {
    axios
      .get(`https://api.github.com/users/AdnanCodes/followers`)
      .then(response => {
        this.setState({ followers: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.followers.map(follower => {
          return <h6 key={follower.id}>User Name: {follower.login}</h6>;
        })}
      </div>
    );
  }
}

export default FollowersCard;
