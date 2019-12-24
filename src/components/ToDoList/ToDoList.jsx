import React from "react";
import deleteIcon from "./delete.png";
import doneIcon from "./done.png";
import returnIcon from "./return.png";
import removeIcon from "./remove.png";
import "./ToDoList.css";

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: "toDoList",
            toDoList: {
                display: "block"
            },
            doneList: {
                display: "none"
            },
            deletedList: {
                display: "none"
            }
        };
        this.handleClick = this.handleClick.bind(this);
    };

    /**
     * This function is build in React, it's called when an update occures.
     * The function looks for what have changed and displays on the screen the selected list.
     */
    componentDidUpdate() {
        if (this.state.currentList !== this.props.chosenList) {
            if (this.props.chosenList === "toDoList") {
                this.setState({
                    currentList: this.props.chosenList,
                    toDoList: { display: "block" },
                    doneList: { display: "none" },
                    deletedList: { display: "none" }
                });
            } else if (this.props.chosenList === "doneList") {
                this.setState({
                    currentList: this.props.chosenList,
                    toDoList: { display: "none" },
                    doneList: { display: "block" },
                    deletedList: { display: "none" }
                });
            } else if (this.props.chosenList === "deletedList") {
                this.setState({
                    currentList: this.props.chosenList,
                    toDoList: { display: "none" },
                    doneList: { display: "none" },
                    deletedList: { display: "block" }
                });
            }
        }
    };

    /**
     * This functions is called when the user click on one of the options in the item.
     * The function takes the text of the item, and the Id of the selected option,
     * and sends it to a fallback function "itemOptions".
     * @param {*} e - The clicked image in the item option menu
     */
    handleClick(e) {
        let toDoItemContent = e.target.parentElement.parentElement.innerText;
        let buttonId = e.target.id;
        let list = e.target.dataset.list;
        this.props.itemOptions(buttonId, toDoItemContent, list);
    };

    render() {
        return (
            <div className="list-container">
                <div className="to-to-list list" style={{ display: this.state.toDoList.display }}>
                    <h2 className="list-title">To Do List:</h2>
                    {
                        this.props.toDoList.map((item, index) =>
                            <div
                                key={index}
                                id={index}
                                className="list-item"
                            >
                                <div className="category-box"></div>
                                <p className="text">{item}</p>
                                <div className="options-container">
                                    <img
                                        id="delete"
                                        className="option-icon"
                                        data-list="toDoList"
                                        src={deleteIcon}
                                        alt="delete item"
                                        onClick={this.handleClick}
                                    />
                                    <img
                                        id="done"
                                        className="option-icon"
                                        data-list="toDoList"
                                        src={doneIcon}
                                        alt="done"
                                        onClick={this.handleClick}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="done-list list" style={{ display: this.state.doneList.display }}>
                    <h2 className="list-title">Done List:</h2>
                    {
                        this.props.doneList.map((item, index) =>
                            <div
                                key={index}
                                id={index}
                                className="list-item"
                            >
                                <div className="category-box"></div>
                                <p className="text">{item}</p>
                                <div className="options-container">
                                    <img
                                        id="remove"
                                        className="option-icon"
                                        data-list="doneList"
                                        src={removeIcon}
                                        alt="remove item"
                                        onClick={this.handleClick}
                                    />
                                    <img
                                        id="return"
                                        className="option-icon"
                                        data-list="doneList"
                                        src={returnIcon}
                                        alt="return"
                                        onClick={this.handleClick}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="deleted-list list" style={{ display: this.state.deletedList.display }}>
                    <h2 className="list-title">Deleted List:</h2>
                    {
                        this.props.deletedList.map((item, index) =>
                            <div
                                key={index}
                                id={index}
                                className="list-item"
                            >
                                <div className="category-box"></div>
                                <p className="text">{item}</p>
                                <div className="options-container">
                                    <img
                                        id="remove"
                                        className="option-icon"
                                        data-list="deletedList"
                                        src={removeIcon}
                                        alt="remove item"
                                        onClick={this.handleClick}
                                    />
                                    <img
                                        id="return"
                                        className="option-icon"
                                        data-list="deletedList"
                                        src={returnIcon}
                                        alt="return"
                                        onClick={this.handleClick}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    };
};