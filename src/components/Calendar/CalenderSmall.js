import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'

import React from 'react';

const CalenderSmall = () => {
    return (
        <FullCalendar
            plugins={[listPlugin]}
            initialView="listWeek"
            height="500px"
            weekends={false}
            slotDuration={'01:00'}
            events={[
                { title: 'Beginner Session - Location', daysOfWeek: '1', startTime: '10:45:00', endTime: '11:45:00' },
                { title: 'Intermediate Session - Location', daysOfWeek: '3', startTime: '10:45:00', endTime: '11:45:00' },
                { title: 'Advanced session - Location', daysOfWeek: '5', startTime: '10:45:00', endTime: '11:45:00' }
            ]}
        />
    );
}

export default CalenderSmall;