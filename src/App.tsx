import { FC } from 'react';
import {Layout} from 'antd';

import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';

import './App.css';

const App: FC = () => {
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
