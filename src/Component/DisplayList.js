import React, {Component} from 'react';
import axios from 'axios';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
require('../../ui-common/sass/home.scss');

import { NavLink } from 'react-router-dom';

class DisplayList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            message: '',
        };

    }

    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelList', { mode: 'no-cors'})
            .then(fetchedData => {
                console.log("inside then ", fetchedData.data);
                let hotelListName = fetchedData.data;

                this.setState({message: hotelListName[0].name});
            });
    }

    NavigationBar () {
        return (
            <div>
                {/* <Navbar> */}
                {/* <Nav class="navbar navbar-expand-lg navbar-light bg-light"> */}


                {/* <NavLink to={`/test/${tVar.item}`}>Test</NavLink>

						<NavLink exact to={"/shop/"} >Shop</NavLink> */}

                {/* </Nav> */}
                {/* </Navbar> */}
            </div>
        );
    }
    MenuBar () {
        return (
            <div className="bg-color ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link linked" href="/home" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hotel" >Restaurant</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.gmail.com">Pricing</a>
                            </li>
                        </ul>
                        {/* <span className="navbar-text">
      Navbar text with an inline element
                        </span> */}
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

export default DisplayList;
