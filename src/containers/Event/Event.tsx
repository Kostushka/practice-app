import { Button, Layout, Modal, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EventCalendar from '../../components/EventCalendar';
import EventForm from '../../components/EventForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGuests } from '../../store/reducers/eventReducer/asyncActionCreators';
import styles from './Event.module.css';

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const { guests } = useTypedSelector((state) => state.event);

    useEffect(() => {
        dispatch(getGuests());
    }, []);

    return (
        <Layout className={styles.modal}>
            <EventCalendar events={[]} />
            <Row justify='center'>
                <Button
                    className={styles.btn}
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title='Добавить событие'
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} />
            </Modal>
        </Layout>
    );
};

export default Event;
