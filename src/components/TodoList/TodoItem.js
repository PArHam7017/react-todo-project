import React from 'react';
import {observer} from "mobx-react";
import todoStore from "../../stores/TodoStore";
import todoModel from "../../models/todoModel";

@observer
class TodoItem extends React.Component {
    handleChangeCheckbox(e) {
        const newTodo = new todoModel(
            this.props.todo.id ,
            this.props.todo.title ,
        );
        newTodo.completed = e.target.checked;
        todoStore.updateTodo(this.props.todo  , newTodo);
    }

    render() {
        const title = (() => {
            if (this.props.todo.completed) {
                return (<del className="todo-title d-inline-block completed">{this.props.todo.title}</del>)
            } else {
                return (<p className="todo-title d-inline-block">{this.props.todo.title}</p>)
            }
        })();

        return (
            <div className="todo-item">
                <div className="round d-inline-block">
                    <input
                        checked={this.props.todo.completed}
                        type="checkbox"
                        id={"checkbox" + this.props.todo.id}
                        onChange={e => this.handleChangeCheckbox(e)}/>
                    <label htmlFor={"checkbox" + this.props.todo.id}/>
                </div>
                {title}
            </div>
        );
    }
}

export default TodoItem;
