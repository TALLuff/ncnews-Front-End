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
    const userStore = { userInfo: this.state };
    window.localStorage.setItem("user", JSON.stringify(userStore));
  };

  logOutUser = () => {
    this.setState({
      loggedInName: null,
      userPicture: null,
      userUsername: null
    });
    const userStore = {
      userInfo: {
        loggedInName: null,
        userPicture: null,
        userUsername: null
      }
    };
    window.localStorage.setItem("user", JSON.stringify(userStore));
  };

  componentDidMount() {
    this.setState(JSON.parse(window.localStorage.getItem("user")).userInfo);
  }

  render() {
    const { loggedInName, userPicture, userUsername } = this.state;
    return (
      <div>
        <div id="background" />
        <div id="content">
          <Header
            loggedInName={loggedInName}
            userPicture={userPicture}
            logInUser={this.logInUser}
            logOutUser={this.logOutUser}
          />
          <Router>
            <Articles path="/" />
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
