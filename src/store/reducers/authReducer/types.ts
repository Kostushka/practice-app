export interface AuthStateType {
    isAuth: boolean;
}

export enum AuthActionName {
    SET_AUTH = 'SET_AUTH',
}

interface SetAuthAction {
    type: AuthActionName.SET_AUTH;
    payload: boolean;
}

export type AuthActionType = SetAuthAction;
