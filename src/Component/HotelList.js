import React, {Component} from 'react';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import mainLogo from '../../ui-common/images/download.png';


class HotelList extends Component {

    constructor () {
        super();
        this.state = {
            articles: [
                { title: "React Redux Tutorial for Beginners", id: 1 },
                { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 },
            ],
        };
    }

    render () {
        const { articles } = this.state;

        return (
            <ul>
                {articles.map(el => <li key={el.id}>{el.title}</li>)}
                <img  src={mainLogo}  alt="fireSpot"/>
            </ul>

        );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

const HotelList1 = connect(mapStateToProps)(HotelList);

export default HotelList1;
