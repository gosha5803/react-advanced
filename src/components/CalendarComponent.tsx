import React, { FC } from 'react';
import {Calendar} from 'antd'
import type {Dayjs} from 'dayjs'
import { IEvent } from '../models/event';
import { formatDate } from '../utils/date';
// import { Badge, BadgeProps } from '@mui/material';
interface CalendarProps {
    events:IEvent[]
}

const CalendarComponent: FC<CalendarProps> = (props) => {


    function dateCellRender(value: Dayjs) {
        const formatedDate = formatDate(value)
        // props.events.map(e => {console.log(e.date))
        const currentDayEvents = props.events.filter(ev => ev.date == formatedDate)
        // console.log(currentDayEvents)
        // const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }

    return (
        <Calendar
        cellRender={dateCellRender}
        />
    );
};

export default CalendarComponent;