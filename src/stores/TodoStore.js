import {observable, action} from "mobx";
import todoModel from "../models/todoModel";


class TodoStore {
    lastId = 3;
    @observable todos = [
        // {id: 0, title: "title1", completed: false, remindAt: null},
        // {id: 1, title: "title2", completed: true, remindAt: null},
        // {id: 2, title: "title3", completed: false, remindAt: null},
    ];
    @observable filter = 0;
    @observable currentPage = 1;
    itemPerPage = 4;

    @action
    addTodo(title) {
        const todo = new todoModel(this.lastId++, title);
        this.todos.push(todo);
    }

    @action
    updateTodo(oldTodo, newTodo) {
        const index = this.todos.findIndex(function (v) {
            return v.id === oldTodo.id;
        });
        this.todos[index] = newTodo;
    }

    @action
    filterTodos(filter) {
        this.filter = filter;
        this.currentPage = 1;
    }

    @action
    changePage(page) {
        this.currentPage = page;
    }

    filteredTodos(filter = this.filter) {
        let filteredTodos;
        if (filter === 0) {
            filteredTodos = this.todos;
        } else if (filter === 1) {
            filteredTodos = this.todos.filter(todo => todo.completed !== true)
        } else if (filter === 2) {
            filteredTodos = this.todos.filter(todo => todo.completed === true)
        }
        return filteredTodos;
    }
}

const todoStore = new TodoStore();
export default todoStore;