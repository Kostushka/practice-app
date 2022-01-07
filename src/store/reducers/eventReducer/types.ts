import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface EventStateType {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENT = 'SET_EVENT',
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}
export interface SetEventAction {
    type: EventActionEnum.SET_EVENT;
    payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventAction;
