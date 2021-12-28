import { IUser } from '../../../models/IUser';
import { AuthActionName, AuthActionType, AuthStateType } from './types';

const initialState: AuthStateType = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: '',
};

export const authReducer = (
    state = initialState,
    action: AuthActionType
): AuthStateType => {
    switch (action.type) {
        case AuthActionName.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };
        case AuthActionName.SET_USER:
            return { ...state, user: action.payload };
        case AuthActionName.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case AuthActionName.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

export const setAuthAction = (payload: boolean): AuthActionType => ({
    type: AuthActionName.SET_AUTH,
    payload,
});
export const setUserAction = (payload: IUser): AuthActionType => ({
    type: AuthActionName.SET_USER,
    payload,
});
export const setIsLoadingAction = (payload: boolean): AuthActionType => ({
    type: AuthActionName.SET_IS_LOADING,
    payload,
});
export const setErrorAction = (payload: string): AuthActionType => ({
    type: AuthActionName.SET_ERROR,
    payload,
});
