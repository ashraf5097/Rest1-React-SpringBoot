import React from 'react';
import mainLogo from '../../../ui-common/images/download.png';

const HotelDisplayBox = (props) => {
    return (
        <ul className='box' onClick={props.onClick}>
            <div className="row">
                <div className="col-md-4">
                    <img  src={mainLogo}  alt="fireSpot"/>
                </div>
                <div>
                    <li>{props.hotel.name}</li>
                    <li>{props.hotel.location}</li>
                    <li>{props.hotel.contact}</li>
                </div>
            </div>
        </ul>
    );
}

export default HotelDisplayBox;
