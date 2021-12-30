import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Form, Input } from 'antd';
import { rules } from '../../utils/rules';
import { asyncActionCreators } from '../../store/reducers/authReducer/asyncActionCreators';

import styles from './LoginForm.module.css';

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const onFinish = () => {
        dispatch(asyncActionCreators.login('N', '222'));
    };
    return (
        <Form
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
        >
            <Card>
                <Form.Item
                    label='Имя пользователя'
                    name='username'
                    rules={[rules.required('Пожалуйста, введите имя!')]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Пароль'
                    name='password'
                    rules={[rules.required('Пожалуйста, введите пароль!')]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Вход
                    </Button>
                </Form.Item>
            </Card>
        </Form>
    );
};

export default LoginForm;
