import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
  }

  handleInputChange = (e) => {
    let inputName = e.target.name
    let value = e.target.value
    this.setState(
      {
        [inputName]: value
      }
    )
  }

  login = (e) => {
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.handleLogin(e)
    }
    
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange}id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange}id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
