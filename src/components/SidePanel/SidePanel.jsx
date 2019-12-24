import React from "react";
import Lists from "../Lists/Lists";
import "./SidePanel.css";

export default class SidePanel extends React.Component {
    render() {
        return (
            <div className="side-panel">
                <Lists 
                    getListToShow={this.props.getListType}
                />
            </div>
        );
    };
};