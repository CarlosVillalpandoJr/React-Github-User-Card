import React, { Component } from 'react';
import axios from "axios"; 
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followerData: []
    }
  }
 
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/carlosvillalpandojr`)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>React GitHub User Card</h1>
      </div>
    );
  }
}

export default App;
