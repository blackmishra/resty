import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { Button, Img, Input, List, Text } from "components";
import moment from 'moment';


const CalendarComp = ({setbookingDate}) => {

    const [newDate, setDate] = useState(new Date());

    return (
        <DatePicker
            selected={newDate}
            onChange={(date) => {
                setbookingDate(date)
                setDate(date)
            }}
            isClearable
            placeholderText="Select a date"
            todayButton="Today"
            minDate={moment().toDate()}
            // showIcon
            // icon="fa fa-calendar"
        />
        
    );
};
export default CalendarComp;