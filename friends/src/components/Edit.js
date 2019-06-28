import React from "react"
import axios from "axios"
import './form.css';

class Edit extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            errorMessage: ''
        };    
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

export default Edit;