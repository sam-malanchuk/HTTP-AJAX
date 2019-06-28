import React from "react"
import axios from "axios"

class New extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    render() {
        const { name, age, email } = this.state;

        return (
            <div>
                <h1>Add a friend</h1>
                <form>
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
                    <input type="text" name="age" value={age} onChange={this.handleChange} placeholder="Age" />
                    <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                </form>
            </div>
        );
    };
};

export default New;