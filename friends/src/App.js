import React from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';

class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Welcome my Friends
        </h1>
        <Friends friends={this.state.friends} />
      </div>
    );
  };
};

export default App;
