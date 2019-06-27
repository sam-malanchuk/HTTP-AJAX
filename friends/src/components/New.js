import React from "react"
import axios from "axios"

class New extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <h1>New</h1>
        );
    };
};

export default New;