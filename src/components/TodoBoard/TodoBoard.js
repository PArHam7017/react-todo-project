import React from 'react';
import './TodoBoard.css';
import TodoList from "../TodoList/TodoList";

function TodoBoard() {
    return (
        <div className="full-page-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoBoard;
