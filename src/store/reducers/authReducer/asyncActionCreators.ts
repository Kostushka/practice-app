import axios from 'axios';
import {
    setAuthAction,
    setErrorAction,
    setIsLoadingAction,
    setUserAction,
} from '.';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';

export const asyncActionCreators = {
    login:
        (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(setIsLoadingAction(true));
                const res = await axios.get<IUser[]>('./users.json');
                const data = res.data.find(
                    (user) =>
                        user.username === username && user.password === password
                );
                if (data) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', data.username);
                    dispatch(setAuthAction(true));
                    dispatch(setUserAction(data));
                } else {
                    dispatch(setErrorAction('Неверный логин или пароль'));
                }
                dispatch(setIsLoadingAction(false));
            } catch (error) {
                dispatch(setErrorAction('Произошла ошибка'));
            }
        },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(setUserAction({} as IUser));
        dispatch(setAuthAction(false));
    },
};
