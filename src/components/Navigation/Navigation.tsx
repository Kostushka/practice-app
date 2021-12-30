import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { asyncActionCreators } from '../../store/reducers/authReducer/asyncActionCreators';
import styles from './Navigation.module.css';

const Navigation: FC = () => {
    const router = useNavigate();
    const { isAuth } = useTypedSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <Layout.Header>
            <Row justify='end' gutter={6}>
                {isAuth ? (
                    <>
                        <div className={styles.name}>Kostushka</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item
                                key='1'
                                onClick={() =>
                                    dispatch(asyncActionCreators.logout())
                                }
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
