import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import FollowersCard from "./components/FollowersCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/AdnanCodes`)
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Card user={this.state.users} />
        <FollowersCard />
      </div>
    );
  }
}

export default App;
