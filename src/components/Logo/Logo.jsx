import React from "react";
import logo from "./logo1.png";
import "./Logo.css";

export default class Logo extends React.Component {
    render() {
        return (
            <div>
                <img
                    className="logo"
                    src={logo}
                    alt={this.props.imgDescription}
                />
            </div>
        );
    };
};