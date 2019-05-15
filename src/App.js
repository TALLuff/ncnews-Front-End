import React from "react";
import "./style.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Router } from "@reach/router";

class App extends React.Component {
  state = {
    loggedInName: null,
    userUsername: null,
    userPicture: null
  };

  logInUser = user => {
    this.setState({
      loggedInName: user.name,
      userPicture: user.avatar_url,
      userUsername: user.username
    });
  };

  logOutUser = () => {
    this.setState({
      loggedInName: null,
      userPicture: null,
      userUsername: null
    });
  };

  render() {
    return (
      <div>
        <Header
          loggedInName={this.state.loggedInName}
          userPicture={this.state.userPicture}
          logInUser={this.logInUser}
          logOutUser={this.logOutUser}
        />
        <Router>
          <Articles path="/" />
          <SingleArticle
            path="/:article_id"
            userUsername={this.state.userUsername}
          />
        </Router>
      </div>
    );
  }
}

export default App;
