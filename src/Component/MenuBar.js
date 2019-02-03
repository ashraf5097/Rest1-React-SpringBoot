import React, {Component} from 'react';
import axios from 'axios';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
require('../../ui-common/sass/home.scss');

import { NavLink } from 'react-router-dom';

class MenuBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelList', { mode: 'no-cors'})
            .then(fetchedData => {
                let hotelListName = fetchedData.data;
                this.setState({message: hotelListName[0].name});
            });
    }

    MenuBar () {
        return (
            <div className="bg-color ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse toolbar" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <NavLink className="menubar" activeClassName="current-page"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                    exact to={'/home'} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menubar"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                    exact to={'/hotel'} >Restaurant</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menubar"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                    exact to={'/addRestaurant'} >Add Restaurant</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="menubar"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                    exact to={'/addFood'} >Add Food</NavLink>
                            </li>
                        </ul>
                        <ul className="login">
                            <li className="nav-item ">
                                <NavLink className="menubar" activeClassName="current-page"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                    exact to={'/home'} >Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.MenuBar()}
            </div>
        );
    }
}

export default MenuBar;
