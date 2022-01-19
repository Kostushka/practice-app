import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { FC, useState } from 'react';
import { IEvent } from '../../models/IEvent';
import { IUser } from '../../models/IUser';
import { formatDate } from '../../utils/date';
import { rules } from '../../utils/rules';

interface EventFormProps {
    guests: IUser[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        data: '',
        descr: '',
        guest: '',
    } as IEvent);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({ ...event, data: formatDate(date.toDate()) });
        }
    };

    return (
        <Form>
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
                rules={[rules.required()]}
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
