import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",

      data: {
        username: "Test",
        password: "Test@123",
      },
    };
  }

  updateInput = (event, key) => {
    this.setState(
      {
        [key]: event.target.value
      }
    );
  };

  handleSubmit = () => {
    const { username, password, data } = this.state;

    if(username === data.username && password === data.password) {
      localStorage.setItem('loggedIn', 1);
      this.setState({'username': '', 'password': ''});
    }

  }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <input
          placeholder="Enter Username"
          type="text"
          onChange={(event) => this.updateInput(event, "username")}
        />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(event) => this.updateInput(event, "password")}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>

    );
  }
}

export default Login;
