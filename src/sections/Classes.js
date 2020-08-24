import React from 'react';

import './Classes.css'
import Card from '../components/Card/Card'
import CalendarSmall from '../components/Calendar/CalenderSmall'

const Classes = () => {
    return (
        <div className="classes-section" id="classes">
            {/* Schedule, Calendar & map */}
            <div className="title">
                <h1>OUR SCHEDULE</h1>
                <p className="sub-title">Come along to our next session or get in contact today!</p>
            </div>
            {/* <div className="title">
                <h1>OUR SCHEDULE</h1>
                <h2>Contact us or come along to our next session!</h2>
            </div> */}
            <div className="calendar">
                <CalendarSmall />
                <div className="map">
                    <iframe width="100%" loading="lazy" height="600" title="map" frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=london+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>

            {/* Pricing Section */}
            <div className="prices">
                <h1>Simple, Affordable Pricing</h1>
                <h2>Billed Monthly</h2>

                {/* Price Cards */}
                <div className="row">
                    <div className="col"><Card studentNumber="1" pricePerOne="£27" pricePerTwo="£37" /></div>
                    <div className="col"><Card studentNumber="2" pricePerOne="£54" pricePerTwo="£64" /></div>
                    <div className="col"><Card studentNumber="3" pricePerOne="£64" pricePerTwo="£74" /></div>
                    <div className="col"><Card studentNumber="4" pricePerOne="£69" pricePerTwo="£79" /></div>
                </div>
            </div>
        </div>
    );
}

export default Classes;