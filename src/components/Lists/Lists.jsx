import React from "react";
import "./Lists.css";

export default class Lists extends React.Component {
    constructor() {
        super();
        this.handleListClick = this.handleListClick.bind(this);
    };
    
    /**
     * This function is called when the user clicks on one of the lists, it's a fallback function.
     * This function takes the name of the list and sends it back the MainContainer Component.
     * @param {*} e - The clicked list.
     */
    handleListClick(e) {
        let listSelected = e.target.dataset.list;
        this.props.getListToShow(listSelected);
    };

    render() {
        return (
            <div className="list-types">
                <div
                    className="list-name"
                    data-list="toDoList"
                    onClick={this.handleListClick}
                >
                    <p data-list="toDoList">To Do List</p>
                </div>
                <div
                    className="list-name"
                    data-list="doneList"
                    onClick={this.handleListClick}
                >
                    <p data-list="doneList">Done List</p>
                </div>
                <div
                    className="list-name"
                    data-list="deletedList"
                    onClick={this.handleListClick}
                >
                    <p data-list="deletedList">Deleted List</p>
                </div>
            </div>
        );
    };
};