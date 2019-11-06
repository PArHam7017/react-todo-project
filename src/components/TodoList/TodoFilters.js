import React from 'react';
import todoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";

@observer
class TodoFilters extends React.Component {
    changeFilter(e , filter){
        e.preventDefault();
        todoStore.filterTodos(filter);
    }

    render() {
        return (
            <div className="card-footer">
                <span className="todo-count"><strong id="items-left">{todoStore.filteredTodos(1).length}</strong> items left</span>
                <ul className="filters">
                    <li key={0}>
                        <button className={"filter-all "+((todoStore.filter === 0)?"active" : "")}
                           onClick={(e) => {this.changeFilter(e ,0)}}>All</button>
                    </li>
                    <li key={1}>
                        <button className={"filter-active "+((todoStore.filter === 1)?"active" : "")}
                           onClick={(e) => {this.changeFilter(e ,1)}}>Active</button>
                    </li>
                    <li key={2}>
                        <button className={"filter-completed "+((todoStore.filter === 2)?"active" : "")}
                           onClick={(e) => {this.changeFilter(e ,2)}}>Completed</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoFilters;
