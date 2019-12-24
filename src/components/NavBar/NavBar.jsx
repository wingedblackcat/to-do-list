import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import "./NavBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-bar-container">
                    <Logo
                        imgDescription="logo"
                    />
                </div>
                <div className="nav-bar-container">
                    <SearchBar />
                </div>
                <div className="nav-bar-container">
                    <AddButton
                        clickEventHandle={this.props.plusButtonClickEvent}
                    />
                </div>
            </nav>
        );
    };
};