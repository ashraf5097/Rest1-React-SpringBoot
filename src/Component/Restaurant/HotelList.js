import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import Bottom from '../Bottom';
import axios from 'axios';
// import hotelData from '../newHotelDataConstant';
import HotelDisplayBox from './HotelDisplayBox';
import { NavLink } from 'react-router-dom';


class HotelList extends Component {

    constructor () {
        super();
        this.state = {
            articles: [
                { title: "React Redux Tut", id: 1 },
                { title: "Redux e React: ", id: 2 },
            ],
            message: undefined,
        };
    }

    componentDidMount () {
        axios.get('http://localhost:8080/displayHotelList', { mode: 'no-cors'})
            .then(fetchedData => {
                let hotelData = fetchedData.data;
                this.setState({message: hotelData });
            });
    }

    hotelClicked (index, HotelID) {
        this.props.history.push({
            pathname: '/foodInRest',
            search: 'uuid=' + HotelID,
        });
        // <NavLink exact to={'/home'} ></NavLink>;
    }

    hotelDisplay (hotelData, index) {
        return (
            <HotelDisplayBox
                hotel={hotelData}
                index={index}
                onClick={()=>this.hotelClicked(index, hotelData.id)}
            />
        );
    }

    render () {
        const { articles, message } = this.state;
        console.log("message  = ", message);
        return (
            <div className="container-fluid add-in-container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        {
                            message && message.map((hotelData, index)=> {
                                return this.hotelDisplay(hotelData, index);
                            })
                        }
                    </div>
                    <div className="col-md-2">
                        <aside>
                            something
                        </aside>
                    </div>
                </div>
                <Bottom />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

export default connect(mapStateToProps)(HotelList);
