// Import resources
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import index from "./js/index";
import { Provider } from "react-redux";
import store from "./store/index";


// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
require('../ui-common/sass/home.scss');


// Render main app
const renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
        , document.getElementById('app'));
};

renderPage();
