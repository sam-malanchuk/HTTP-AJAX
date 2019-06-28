import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends';
import New from './components/New';
import Edit from './components/Edit';
import Delete from './components/Delete';

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

  updateItems = items => {
    this.setState({ friends: items });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Welcome my Friends
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">Add a Friend</Link>
        </nav>

        <Route path="/" exact render={(props) => <Friends {...props} friends={this.state.friends} />} />
				<Route path="/new" exact render={(props) => <New {...props} updateItems={this.updateItems} />} />
				<Route path="/edit/:id" render={(props) => <Edit {...props} updateItems={this.updateItems} />} />
				<Route path="/delete/:id" render={(props) => <Delete {...props} updateItems={this.updateItems} />} />
      </div>
    );
  };
};

export default App;
