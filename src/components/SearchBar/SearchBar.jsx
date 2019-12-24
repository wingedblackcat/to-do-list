import React from "react";
import search from "./search.png";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar-container">
                <label
                    className="icon-container"
                    htmlFor="search"
                >
                    <img
                        className="icon"
                        src={search}
                        alt=""
                    />
                </label>
                <input id="search" className="search-bar" />
            </div>
        );
    };
};