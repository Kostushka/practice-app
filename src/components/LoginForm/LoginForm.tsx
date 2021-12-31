import { FC } from 'react';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Button, Card, Form, Input } from 'antd';
import { rules } from '../../utils/rules';
import { asyncActionCreators } from '../../store/reducers/authReducer/asyncActionCreators';

import styles from './LoginForm.module.css';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isLoading, error } = useTypedSelector((state) => state.auth);
    const onFinish = () => {
        dispatch(asyncActionCreators.login(username, password));
    };
    return (
        <Form
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
        >
            <Card>
                {error && <div className={styles.error}>{error}</div>}
                <Form.Item
                    label='Имя пользователя'
                    name='username'
                    rules={[rules.required('Пожалуйста, введите имя!')]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label='Пароль'
                    name='password'
                    rules={[rules.required('Пожалуйста, введите пароль!')]}
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        loading={isLoading}
                    >
                        Вход
                    </Button>
                </Form.Item>
            </Card>
        </Form>
    );
};

export default LoginForm;
