import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import {
    EventAction,
    EventActionEnum,
    EventStateType,
    SetGuestsAction,
    SetEventAction,
} from './types';

const initialState: EventStateType = {
    guests: [],
    events: [],
};

export const eventReducer = (
    state = initialState,
    action: EventAction
): EventStateType => {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return { ...state, guests: action.payload };
        case EventActionEnum.SET_EVENT:
            return { ...state, events: action.payload };

        default:
            return state;
    }
};

export const setGuestsAction = (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
});
export const setEventAction = (payload: IEvent[]): SetEventAction => ({
    type: EventActionEnum.SET_EVENT,
    payload,
});
