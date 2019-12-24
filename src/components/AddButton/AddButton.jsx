import React from "react";
import plus from "./plus.png";
import "./AddButton.css";

export default class AddButton extends React.Component {
    constructor() {
        super();
        this.showPopup = this.showPopup.bind(this);
    };

    /**
     * This function is called when the user press the + button.
     * The function activates the fallback function "clickEventHandle"
     */
    showPopup() {
        this.props.clickEventHandle();
    };

    render() {
        return (
            <div className="brn-container">
                <button className="add-btn" onClick={this.showPopup}>
                    <img
                        className="plus"
                        src={plus}
                        alt="addItem"
                    />
                </button>
            </div>
        );
    };
};