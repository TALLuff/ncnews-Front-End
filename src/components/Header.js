import React from "react";
import Title from "./Title";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import axios from "axios";

class Header extends React.Component {
  attemptLogin = (username, password) => {
    if (password !== "password") {
      alert("Invalid Login Details");
    } else {
      const url = `https://nc-news-northcoders.herokuapp.com/api/users/${username}`;
      axios
        .get(url)
        .then(({ data: { user } }) => {
          this.props.logInUser(user);
        })
        .catch(() => {
          alert("Invalid Login Details");
        });
    }
  };

  render() {
    const { loggedInName, userPicture } = this.props;
    return loggedInName ? (
      <div id="header">
        <Title />
        <LoggedIn
          loggedInName={loggedInName}
          userPicture={userPicture}
          logOutUser={this.props.logOutUser}
        />
      </div>
    ) : (
      <div id="header">
        <Title />
        <Login loggedInName={loggedInName} attemptLogin={this.attemptLogin} />
      </div>
    );
  }
}

export default Header;
