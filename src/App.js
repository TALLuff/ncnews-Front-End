import React from "react";
import "./style.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound";
import { Router } from "@reach/router";
import Footer from "./components/Footer";
import UserArticles from "./components/UserArticles";

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
    const userStore = this.state;
    window.localStorage.setItem("user", JSON.stringify(userStore));
  };

  logOutUser = () => {
    this.setState({
      loggedInName: null,
      userPicture: null,
      userUsername: null
    });
    const userStore = {
      loggedInName: null,
      userPicture: null,
      userUsername: null
    };
    window.localStorage.setItem("user", JSON.stringify(userStore));
  };

  componentDidMount() {
    let userInfo = window.localStorage.getItem("user");
    if (userInfo) {
      this.setState(JSON.parse(userInfo));
    }
  }

  render() {
    const { loggedInName, userPicture, userUsername } = this.state;
    return (
      <div>
        <div id="background" />
        <Header
          loggedInName={loggedInName}
          userPicture={userPicture}
          logInUser={this.logInUser}
          logOutUser={this.logOutUser}
        />
        <div id="content">
          <Router>
            <Articles path="/" userUsername={userUsername} />
            <SingleArticle
              path="/articles/:article_id"
              userUsername={userUsername}
            />
            <UserArticles path="/userArticles" userUsername={userUsername} />
            <NotFound default />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
