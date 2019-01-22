
// Import react
import React from 'react';
import MenuBar from './Component/MenuBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelList from './Component/Restaurant/HotelList';
import AddRestaurant from './Component/Restaurant/AddRestaurant';
import Home from './Component/Home.js';
import FoodInRest from './Component/Food/FoodInRest';
import AddFood from './Component/Food/AddFood';
import { hot } from "react-hot-loader";

class App extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <div>
                        <MenuBar />
                        <Route path="/home" component={Home} />
                        <Route path="/hotel" component={HotelList} />
                        <Route path="/foodInRest" component={FoodInRest} />
                        <Route path="/addFood" component={AddFood} />
                        <Route path="/addRestaurant" component={AddRestaurant} />
                        {/* <Route path="/contact" component={contact} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
