import { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import styles from './Navigation.module.css';

const Navigation: FC = () => {
    const router = useNavigate();
    const { isAuth } = useTypedSelector((state) => state.auth);

    return (
        <Layout.Header>
            <Row justify='end' gutter={6}>
                {isAuth ? (
                    <>
                        <div className={styles.name}>Kostushka</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item
                                key='1'
                                onClick={() => console.log('Выйти')}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                ) : (
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item
                            key='1'
                            onClick={() => router(RouteNames.LOGIN)}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                )}
            </Row>
        </Layout.Header>
    );
};

export default Navigation;
