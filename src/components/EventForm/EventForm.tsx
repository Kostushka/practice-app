import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC } from 'react';
import { rules } from '../../utils/rules';

const EventForm: FC = () => {
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
                    <Select.Option value='jack'>Jack</Select.Option>
                    <Select.Option value='lucy'>Lucy</Select.Option>
                    <Select.Option value='disabled' disabled>
                        Disabled
                    </Select.Option>
                    <Select.Option value='Yiminghe'>yiminghe</Select.Option>
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
