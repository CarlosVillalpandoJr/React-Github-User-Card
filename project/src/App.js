import React, { Component } from 'react';
import UserCard from './components/UserCard'
import FollowerList from './components/FollowerList'
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
      .then(result => {
        // console.log('User Data Result: ', result)
        this.setState({
          userData: result.data
        })
        axios
          .get(result.data.followers_url)
          .then(result => {
            // console.log('Follower Data: ', result)
            this.setState({
              followerData: result.data
            })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">  
      <h1>GitHub Class Components Project</h1>
      <UserCard userData={this.state.userData} />
      <FollowerList followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;


