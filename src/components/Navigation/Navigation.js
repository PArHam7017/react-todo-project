import React from 'react';
import './Navigation.css';
import store from '../../stores';
import {observer} from "mobx-react";
import {Nav, Navbar} from "react-bootstrap";

@observer
class Navigation extends React.Component {
    componentDidMount() {
        setInterval(() => {
            store.setTime(new Date());
        } , 1000);
    }

    render() {
        return (
            <Navbar className={"navbar"} bg="dark" variant="dark">
                <Navbar.Brand href="#home">ToDo</Navbar.Brand>
                <Nav className="time ml-auto">
                    {store.getTime().toLocaleTimeString()}
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
