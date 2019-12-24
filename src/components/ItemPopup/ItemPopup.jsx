import React from "react";
import "./ItemPopup.css";

export default class ItemPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    };

    /**
     * This functions is called the moment there is an input in the input bar,
     * it takes the value and stores it in the state.
     * @param {*} e - The event, in this situation it means the input from the user. 
     */
    handleInput(e) {
        let text = e.target.value;
        this.setState({
            text: text
        });
    };

    /**
     * This functions is called at the moment one of the buttons (cancel or add item) are pressed.
     * It checkes which button was pressed based on it's Id.
     * If the "submit" button is pressed the function will take the text that submitted from the user and stored in the state and will send it back to the parent with the fallback function "popupButtonClick".
     * If the "cancel" button is pressed the function will call the fallback function without sending back a value.
     * then the function resets the input bar and the state. 
     * @param {*} e - The event, in this situation it means button pressed by the user. 
     */
    handleSubmit(e) {
        if (e.target.id === "submit") {
            let value = this.state.text;
            this.props.popupButtonClick(value);
        } else {
            this.props.popupButtonClick();
        }
        this.setState({
            text: ""
        });
        document.getElementById("input").value = "";
    };

    render() {
        return (
            <div className="popup" style={{ display: this.props.show }}>
                <div className="popup-container">
                    <div id="task">
                        <input
                            id="input"
                            className="input-text"
                            type="text"
                            onChange={this.handleInput}
                            placeholder="What to do today?"
                        />
                    </div>
                    <div className="btn-container">
                        <button
                            id="cancel"
                            className="btn cancel"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            cancel
                        </button>
                        <button
                            id="submit"
                            className="btn add"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            Add Item
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};