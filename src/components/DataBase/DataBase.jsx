"I could not find a good way to make this component and the main container to 'talk' ";

import React from "react";

export default class DataBase extends React.Component {
    constructor() {
        super();
        this.state = {
            toDoItems: [
                "fix search bar",
                "add data base component",
                "the design my gosh"
            ],
            doneItems: [],
            deletedItems: []
        };
        this.chosenListToShow = this.chosenListToShow.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeCompletely = this.removeCompletely.bind(this);
        this.moveItemToDone = this.moveItemToDone.bind(this);
        this.moveItemToDelete = this.moveItemToDelete.bind(this);
        this.moveItemToToDo = this.moveItemToToDo.bind(this);
    };

    /**
    * This function is called from the SidePanel's child Lists, it's a fallback function.
    * The function changes the selected list to show in the state.
    * @param {*} list 
    */
    chosenListToShow(list) {
        this.setState({
            listToShow: list
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
            <div></div>
        );
    };
};