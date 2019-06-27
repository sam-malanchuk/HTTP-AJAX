import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends';
import New from './components/New';

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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">Add a friend</Link>
        </nav>

        <Route path="/" exact render={(props) => <Friends {...props} friends={this.state.friends} />} />
				<Route path="/new" exact render={(props) => <New {...props} />} />
      </div>
    );
  };
};

export default App;
