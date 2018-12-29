
// Import react
import React from 'react';
import DisplayList from './Component/DisplayList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HotelList from './Component/HotelList';


class App extends React.Component {


    render () {
        return (
            <div>

                <div className="jumbotron">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item ">
                                <img className="d-block w-100" src="" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Second slide" />
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src="..." alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div>
                    <div>
                        <DisplayList />
                        <Route path="home" component={DisplayList} />
                        <Route path="/hotel" component={HotelList} />
                       
                        {/* <Route path="/foodList" component={FoodList} />
                            <Route path="/about" component={about} />
                            <Route path="/contact" component={contact} /> */}
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
