class todoModel {
    id;
    title;
    completed;
    remindAt;

    constructor(id , title , remindAt = null) {
        this._completed = false;
        this._title = title;
        this._remindAt = remindAt;
        this._id = id;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get remindAt() {
        return this._remindAt;
    }

    set remindAt(value) {
        this._remindAt = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}

export default todoModel