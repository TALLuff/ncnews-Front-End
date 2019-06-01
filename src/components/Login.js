import React from "react";

class Login extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  updateInput = (value, key) => {
    this.setState({ [key]: value });
  };

  render() {
    const { usernameInput, passwordInput } = this.state;
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.attemptLogin(usernameInput, passwordInput);
          }}
          id="loginForm"
        >
          <div id="loginInputs">
            <input
              placeholder="Enter username"
              onChange={e => this.updateInput(e.target.value, "usernameInput")}
              required
              className="restyle"
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={e => this.updateInput(e.target.value, "passwordInput")}
              required
              className="restyle"
            />
          </div>
          <button type="submit" className="restyle">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
