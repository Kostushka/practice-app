import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC } from 'react';
import { IUser } from '../../models/IUser';
import { rules } from '../../utils/rules';

interface EventFormProps {
    guests: IUser[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
    return (
        <Form>
            <Form.Item
                label='Описание события'
                name='desc'
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Выбрать дату'
                name='date'
                rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                label='Выбрать гостя'
                name='guest'
                rules={[rules.required()]}
            >
                <Select style={{ width: 120 }}>
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
