import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';

import { setAuthAction, setUserAction } from './store/reducers/authReducer';
import { IUser } from './models/IUser';

import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';

import './App.css';

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(
                setUserAction({
                    username: localStorage.getItem('username' || ''),
                } as IUser)
            );
            dispatch(setAuthAction(true));
        }
    }, []);

    return (
        <Layout>
            <Navigation />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;
