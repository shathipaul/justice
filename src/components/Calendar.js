import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';


const Calendar = ({ selectedDate, setSelectedDate }) => {
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p className='font-semibold text-center'>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (

        <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
        />
    );
};

export default Calendar;