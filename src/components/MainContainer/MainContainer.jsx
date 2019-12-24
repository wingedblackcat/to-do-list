import React from "react";
import NavBar from "../NavBar/NavBar"
import SidePanel from "../SidePanel/SidePanel";
import ToDoList from "../ToDoList/ToDoList";
import ItemPopup from "../ItemPopup/ItemPopup";
import "./MainContainer.css";

export default class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            popup: {
                display: "none",
            },
            listToShow: "toDoList",
            toDoItems: [],
            doneItems: [],
            deletedItems: []
        };
        this.chosenListToShow = this.chosenListToShow.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeCompletely = this.removeCompletely.bind(this);
        this.moveItemToDone = this.moveItemToDone.bind(this);
        this.moveItemToDelete = this.moveItemToDelete.bind(this);
        this.moveItemToToDo = this.moveItemToToDo.bind(this);
        this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this);
        this.handlePopupClick = this.handlePopupClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    };

    /**
     * This functions is called from NavBar's child AddButton, it's a fallback function.
     * The functions changes the state of popup to "block" - "opening" up the popup.
     */
    handlePlusButtonClick() {
        this.setState({
            popup: {
                display: "block"
            }
        });
    };

    /**
     * This function is called from the SidePanel's child Lists, it's a fallback function.
     * The function changes the selected list to show in the state.
     * @param {string} list - The selected list to show on screen, selected by the user.
     */
    chosenListToShow(list) {
        this.setState({
            listToShow: list
        });
    };

    /**
     * This function is called from the child ItemPopup, it's a fallback function.
     * The functions checks if the parameter is not empty first.
     * If the parameter isn't empty it sends it to the addItem function.
     * If the parameter is empty it does nothing with it.
     * Then it changes the state to "none" - "closing" off the popup.
     * @param {string} value - The string the child component sends back.
     */
    handlePopupClick(value) {
        if (value) {
            this.addItem(value);
        }
        this.setState({
            popup: {
                display: "none"
            }
        });
    };

    /**
     * This function is called by the "handlePopupClick" function.
     * This function adds a new Item (To Do Item) to the items list in the state.
     * @param {string} newItem - The new Item to add to the list.
     */
    addItem(newItem) {
        this.setState({
            toDoItems: [...this.state.toDoItems, newItem]
        });
    };

    /**
     * This function is called from the child ToDoList component, it's a fallback function.
     * The function acts as a junction for the actions that can be done on the items.
     * @param {string} action - The action the user chose to do on the item. 
     * @param {string} item - The item which we do the action upon.
     * @param {string} list - The name of the list from which the item is sent.
     */
    handleItemClick(action, item, list) {
        switch (action) {
            case "delete":
                this.moveItemToDelete(item);
                break;
            case "done":
                this.moveItemToDone(item);
                break;
            case "return":
                this.moveItemToToDo(item, list);
                break;
            case "remove":
                this.removeCompletely(item, list);
                break;
            default: console.log("Error! No such option!");
                break;
        };
    };

    /**
     * This function is called from the "handleItemClick" function.
     * This function searches the given item in the given list and removes it completely.
     * @param {string} item - The item to remove.
     * @param {string} list - The list the item is currently in.
     */
    removeCompletely(item, list) {
        let itemIndex = 0;
        let updatedList = [];
        if (list === "doneList") {
            itemIndex = this.state.doneItems.indexOf(item);
            updatedList = [...this.state.doneItems];
            updatedList.splice(itemIndex, 1);
            this.setState({
                popup: {
                    display: this.state.popup
                },
                listToShow: this.state.listToShow,
                toDoItems: [...this.state.toDoItems],
                doneItems: updatedList,
                deletedItems: [...this.state.deletedItems]
            });
        } else if (list === "deletedList") {
            itemIndex = this.state.deletedItems.indexOf(item);
            updatedList = [...this.state.deletedItems];
            updatedList.splice(itemIndex, 1);
            this.setState({
                popup: {
                    display: this.state.popup
                },
                listToShow: this.state.listToShow,
                toDoItems: [...this.state.toDoItems],
                doneItems: [...this.state.doneItems],
                deletedItems: updatedList
            });
        }
    };

    /**
     * This function is called from the "handleItemClick" function.
     * This function returns the given item to the To Do List from it's current list.
     * @param {string} item - The item to return to the To Do List.
     * @param {string} list - The list the item is currently in.
     */
    moveItemToToDo(item, list) {
        let itemIndex = 0;
        let updatedList = [];
        if (list === "doneList") {
            itemIndex = this.state.doneItems.indexOf(item);
            updatedList = [...this.state.doneItems];
            updatedList.splice(itemIndex, 1);
            this.setState({
                popup: {
                    display: this.state.popup
                },
                listToShow: this.state.listToShow,
                toDoItems: [...this.state.toDoItems, item],
                doneItems: updatedList,
                deletedItems: [...this.state.deletedItems]
            });
        } else if (list === "deletedList") {
            itemIndex = this.state.deletedItems.indexOf(item);
            updatedList = [...this.state.deletedItems];
            updatedList.splice(itemIndex, 1);
            this.setState({
                popup: {
                    display: this.state.popup
                },
                listToShow: this.state.listToShow,
                toDoItems: [...this.state.toDoItems, item],
                doneItems: [...this.state.doneItems],
                deletedItems: updatedList
            });
        }
    };

    /**
     * This function is called from the "handleItemClick" function.
     * This function moves the selected item to the deleted item list.
     * @param {string} item - The selected item to move.
     */
    moveItemToDelete(item) {
        let itemIndex = 0;
        let updatedToDoList = [];
        itemIndex = this.state.toDoItems.indexOf(item);
        updatedToDoList = [...this.state.toDoItems];
        updatedToDoList.splice(itemIndex, 1);
        this.setState({
            popup: {
                display: this.state.popup
            },
            listToShow: this.state.listToShow,
            toDoItems: updatedToDoList,
            doneItems: [...this.state.doneItems],
            deletedItems: [...this.state.deletedItems, item]
        });
    };

    /**
    * This function is called from the "handleItemClick" function.
    * This function moves the selected item to the done item list.
    * @param {string} item - The selected item to move.
    */
    moveItemToDone(item) {
        let itemIndex = 0;
        let updatedToDoList = [];
        itemIndex = this.state.toDoItems.indexOf(item);
        updatedToDoList = [...this.state.toDoItems];
        updatedToDoList.splice(itemIndex, 1);
        this.setState({
            popup: {
                display: this.state.popup
            },
            listToShow: this.state.listToShow,
            toDoItems: updatedToDoList,
            doneItems: [...this.state.doneItems, item],
            deletedItems: [...this.state.deletedItems]
        });
    };

    render() {
        return (
            <div className="to-do-app">
                <NavBar
                    plusButtonClickEvent={this.handlePlusButtonClick}
                />
                <main className="to-do-main">
                    <SidePanel
                        getListType={this.chosenListToShow}
                    />
                    <ToDoList
                        chosenList={this.state.listToShow}
                        toDoList={this.state.toDoItems}
                        doneList={this.state.doneItems}
                        deletedList={this.state.deletedItems}
                        itemOptions={this.handleItemClick}
                    />
                </main>
                <ItemPopup
                    popupButtonClick={this.handlePopupClick}
                    show={this.state.popup.display}
                />
            </div>
        );
    };
};