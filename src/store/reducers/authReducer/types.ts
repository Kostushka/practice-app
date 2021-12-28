import { IUser } from '../../../models/IUser';

export interface AuthStateType {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionName {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

interface SetAuthAction {
    type: AuthActionName.SET_AUTH;
    payload: boolean;
}
interface SetUserAction {
    type: AuthActionName.SET_USER;
    payload: IUser;
}
interface SetIsLoadingAction {
    type: AuthActionName.SET_IS_LOADING;
    payload: boolean;
}
interface SetErrorAction {
    type: AuthActionName.SET_ERROR;
    payload: string;
}

export type AuthActionType =
    | SetAuthAction
    | SetUserAction
    | SetIsLoadingAction
    | SetErrorAction;
