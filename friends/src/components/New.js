import React from "react"
import axios from "axios"
import './New.css';

class New extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            errorMessage: ''
        };
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    createFriend = evt => {
        evt.preventDefault();

        const { name, age, email } = this.state;
        const payload = { name, age, email };

        axios.post("http://localhost:5000/friends", payload)
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
    };

    render() {
        const { name, age, email, errorMessage } = this.state;

        return (
            <div className="newFriend">
                <h1>Add a friend</h1>

                <p>{errorMessage}</p>

                <form onSubmit={this.createFriend}>
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                    <input type="number" name="age" value={age} onChange={this.handleChange} placeholder="Age" />
                    <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />

                    <button type="submit">Add</button>
                </form>
            </div>
        );
    };
};

export default New;