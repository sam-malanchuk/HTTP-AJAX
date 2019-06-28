import React from "react"
import axios from "axios"
import './form.css';
import { runInThisContext } from "vm";

class Edit extends React.Component {
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
            })
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

    render() {
        const { name, age, email, errorMessage } = this.state;

        return (
            <div className="newFriend">
                <h1>Edit the information</h1>

                <p>{errorMessage}</p>

                <form onSubmit={this.createFriend}>
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                    <input type="number" name="age" value={age} onChange={this.handleChange} placeholder="Age" />
                    <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />

                    <button type="submit">Update</button>
                </form>
            </div>
        );
    };
};

export default Edit;