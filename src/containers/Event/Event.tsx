import { Layout } from 'antd';
import { FC } from 'react';
import EventCalendar from '../../components/EventCalendar';
import styles from './Event.module.css';

const Event: FC = () => {
    return (
        <Layout>
            <EventCalendar events={[]} />
        </Layout>
    );
};

export default Event;
