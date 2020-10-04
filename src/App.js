import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = {
    text: "",
  };

  handleAdd = async (e) => {
    await this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = "http://localhost:80/react_PHP%20_Mysql/react-backend/";
    axios
      .post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App-header">
        <input
          type="text"
          id="text"
          placeholder="enter some text"
          onChange={this.handleAdd}
        />
        <br />
        <button
          className="btn btn-success"
          id="submit"
          onClick={this.handleSubmit}
        >
          Save
        </button>
      </div>
    );
  }
}

export default App;
