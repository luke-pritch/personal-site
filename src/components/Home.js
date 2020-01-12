import "../styles/styles.scss";
import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Luke Pritchard</h1>
                <h2>Personal Site</h2>
                <button className="button is-dark is-medium">Resume</button>
            </div>
        );
    }
}

export default Home;
