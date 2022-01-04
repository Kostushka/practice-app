import { Button, Layout, Modal, Row } from 'antd';
import { FC, useState } from 'react';
import EventCalendar from '../../components/EventCalendar';
import styles from './Event.module.css';

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
            />
        </Layout>
    );
};

export default Event;
