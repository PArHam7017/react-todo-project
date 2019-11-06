import React from 'react';
import './TodoList.css';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";
import todoStore from "../../stores/TodoStore";
import {observer} from "mobx-react";
import {Pagination} from "react-bootstrap";

@observer
class TodoList extends React.Component {
    render() {
        let maxPage = Math.floor(todoStore.filteredTodos().length / todoStore.itemPerPage);
        if ((todoStore.filteredTodos().length - (maxPage*todoStore.itemPerPage)) > 0) maxPage++;

        const pages = (() => {
            const tmpPages = [];
            for (let i = 1;i < maxPage + 1;i++) {
                tmpPages.push(
                    <Pagination.Item key={i} active={(todoStore.currentPage === i)} onClick={() => {
                        todoStore.changePage(i);
                    }}>{i}</Pagination.Item>
                );
            }
            return tmpPages;
        } )();

        return (
            <div className="todo-area">
                <div className="card todo-card">
                    <div className="card-header">Todo List</div>
                    <div className="card-body">
                        <AddTodo />
                        <hr/>
                        <div className="todo-list">
                            {todoStore.filteredTodos()
                                .slice((todoStore.currentPage - 1)*todoStore.itemPerPage , (todoStore.currentPage)*todoStore.itemPerPage)
                                .map(todo => {
                                    return <TodoItem key={todo.id} todo={todo}/>
                                })}
                        </div>
                        <Pagination>
                            <Pagination.First onClick={() => {todoStore.changePage(1)}}/>

                            <Pagination.Prev onClick={() => {
                                const page =  (todoStore.currentPage > 1) ? todoStore.currentPage - 1 : 1;
                                todoStore.changePage(page);
                            }} />

                            {pages}

                            <Pagination.Next onClick={() => {
                                const page =  (todoStore.currentPage < maxPage) ? todoStore.currentPage + 1 : maxPage;
                                todoStore.changePage(page);
                            }} />

                            <Pagination.Last onClick={() => {todoStore.changePage(maxPage)}} />
                        </Pagination>
                    </div>
                    <TodoFilters/>
                </div>
            </div>
        );
    }
}

export default TodoList;
