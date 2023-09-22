import React, { FC } from 'react';
import {Calendar, Badge, BadgeProps} from 'antd'
import type {Dayjs} from 'dayjs'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/event';
import { Moment } from 'moment';
// import { Badge, BadgeProps } from '@mui/material';
interface CalendarProps {
    events:IEvent[]
}

const CalendarComponent: FC<CalendarProps> = (props) => {
    

    function dateCellRender(value: Dayjs) {
        const formatedDate = value.date();
        props.events.map(e => console.log(e.date))
        console.log(value.date)
        // const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {/* {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )} */}
            </div>
        );
    }

    // function dateCellRender (value: Dayjs) {
    //     return(
    //         <div>

    //         </div>
    //     )
    // }

    return (
        <Calendar
        cellRender={dateCellRender}
        />
    );
};

export default CalendarComponent;