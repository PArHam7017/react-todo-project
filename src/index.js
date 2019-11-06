import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/style.css';
import './styles/responsive.css';
import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
