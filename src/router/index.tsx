import Login from '../containers/Login';
import Event from '../containers/Event';

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    LOGIN = 'login',
    EVENT = '/',
    ALL = '*',
}

export const publicRouter: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        element: <Login />,
    },
    {
        path: RouteNames.ALL,
        element: <Login />,
    },
];

export const privateRouter: IRoute[] = [
    {
        path: RouteNames.EVENT,
        element: <Event />,
    },
    {
        path: RouteNames.ALL,
        element: <Event />,
    },
];
