import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/coryortega/followers')
      .then(res => {
        console.log(res)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.followers !== this.state.followers) {
      axios
      .get('https://api.github.com/users/coryortega/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err));
    }

  }

  render() {

    
    return (
      
      <div className="App">

        <div className ="container">
        <h1>The Homies</h1>
        {this.state.followers.length === 0 && <p>Loading Followers...</p>}
        <div className="followers">
          {this.state.followers.map(follower => (
            <div className = "follower">
            <img className = "pic" width="200" src={follower.avatar_url}/>
            <h3>{follower.login}</h3>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }

}



export default App;