import { FC } from 'react';
import { Calendar } from 'antd';
import { Moment } from 'moment';
import { IEvent } from '../../models/IEvent';
import { formatDate } from '../../utils/date';

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
    const dateCellRender = (value: Moment) => {
        const formateDate = formatDate(value.toDate());

        const currentDateEvents = events.filter(
            (ev) => ev.data === formateDate
        );

        return (
            <div>
                {currentDateEvents.map((ev, i) => (
                    <div key={i}>{ev.descr}</div>
                ))}
            </div>
        );
    };
    return (
        <>
            <Calendar dateCellRender={dateCellRender} />
        </>
    );
};

export default EventCalendar;
