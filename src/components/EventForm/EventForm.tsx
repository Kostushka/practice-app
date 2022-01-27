import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { FC, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IEvent } from '../../models/IEvent';
import { IUser } from '../../models/IUser';
import { formatDate } from '../../utils/date';
import { rules } from '../../utils/rules';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        data: '',
        descr: '',
        guest: '',
    } as IEvent);

    const { user } = useTypedSelector((state) => state.auth);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({ ...event, data: formatDate(date.toDate()) });
        }
    };

    const submitForm = () => {
        submit({ ...event, author: user.username });
    };

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label='Описание события'
                name='desc'
                rules={[rules.required()]}
            >
                <Input
                    onChange={(e) =>
                        setEvent({ ...event, descr: e.target.value })
                    }
                    value={event.descr}
                />
            </Form.Item>

            <Form.Item
                label='Выбрать дату'
                name='date'
                rules={[
                    rules.required(),
                    rules.isDateAfter('Нельзя создать событие на эту дату'),
                ]}
            >
                <DatePicker onChange={(date) => selectDate(date)} />
            </Form.Item>

            <Form.Item
                label='Выбрать гостя'
                name='guest'
                rules={[rules.required()]}
            >
                <Select
                    style={{ width: 120 }}
                    onChange={(guest: string) => setEvent({ ...event, guest })}
                >
                    {guests.map((guest) => (
                        <Select.Option
                            key={guest.password}
                            value={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Row justify='end'>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Добавить
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
