import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './form.css';
import { runInThisContext } from "vm";

class Delete extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            errorMessage: null
        };    
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/friends/`)
            .then(response => {
                // not the cleanest code but couldn't get pulling directly from the server with the ID
                let friendIndex = response.data.filter(friend => friend.id == id);
                const { name, age, email } = friendIndex[0];
                this.setState({ name, age, email });
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response.data.error
                })
            });
    };

    deleteFriend = evt => {
        evt.preventDefault();

        const id = this.props.match.params.id

        console.log("working before entering axios");
        axios.delete(`http://localhost:5000/friends/${id}`)
			.then((response) => {
				this.setState({
					errorMessage: null
				});

				this.props.updateItems(response.data);
				this.props.history.push("/");
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				});
			});
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

    render() {
        const { name, age, email, errorMessage } = this.state;

        return (
            <div className="newFriend">
                <h1>Delete Friend</h1>
                <h2>Are you sure you would like to delete {name}?</h2>
                <p>{errorMessage}</p>
                <button type="delete" onClick={this.deleteFriend} >Delete</button>
                <Link to="/">Go Back</Link>
            </div>
        );
    };
};

export default Delete;