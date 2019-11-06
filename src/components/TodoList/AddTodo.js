import React from 'react';
import {IconContext} from "react-icons";
import {IoIosAddCircle} from "react-icons/io";
import todoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";

@observer
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleAddTodoClick = () => {
        if (this.state.title) {
            todoStore.addTodo(this.state.title);
            this.setState({title : ''});
        }
    };

    updateInput(e) {
        this.setState({title : e.target.value});
    };

    handleKeyDown(e){
        if (e.keyCode === 13) {
            this.handleAddTodoClick();
        }
    }

    render() {
        return (
            <div className="add-todo">
                <input
                    value={this.state.title}
                    type="text"
                    placeholder={"New Todo"}
                    onChange={e => this.updateInput(e)}
                    onKeyDown={e => this.handleKeyDown(e)}

                />
                <button type={"button"} onClick={this.handleAddTodoClick}>
                    <IconContext.Provider value={{className: "add-icon"}}>
                        <IoIosAddCircle/>
                    </IconContext.Provider>
                </button>
            </div>
        );
    }
}

export default AddTodo;
