import {observable, action, configure} from "mobx";

configure({enforceActions: "observed"});


class Store {
    @observable _time = new Date();

    @action setTime(value) {
        this._time = value;
    }


    getTime() {
        return this._time;
    }
}

const store = new Store();
export default store;