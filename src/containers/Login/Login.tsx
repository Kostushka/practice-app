import { FC } from 'react';
import { Layout, Row } from 'antd';
import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm';

const Login: FC = () => {
    return (
        <Layout>
            <Row justify='center' align='middle' className={styles.row}>
                <LoginForm />
            </Row>
        </Layout>
    );
};

export default Login;
