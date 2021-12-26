import { AuthActionName, AuthActionType, AuthStateType } from './types';

const initialState: AuthStateType = {
    isAuth: false,
};

export const authReducer = (
    state = initialState,
    action: AuthActionType
): AuthStateType => {
    switch (action.type) {
        case AuthActionName.SET_AUTH:
            return { ...state, isAuth: action.payload };

        default:
            return state;
    }
};

export const setAuthAction = (payload: boolean): AuthActionType => ({
    type: AuthActionName.SET_AUTH,
    payload,
});
