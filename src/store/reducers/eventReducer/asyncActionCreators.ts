import { setGuestsAction, setEventAction } from '.';
import { AppDispatch } from '../..';
import { UserService } from '../../../api/userService';
import { IEvent } from '../../../models/IEvent';

export const getGuests = () => async (dispatch: AppDispatch) => {
    try {
        const res = await UserService.getUsers();
        dispatch(setGuestsAction(res.data));
    } catch (error) {
        console.log(error);
    }
};

export const createEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
        const events = localStorage.getItem('events') || '[]';
        const json = JSON.parse(events);
        json.push(event);
        dispatch(setEventAction(json));
        localStorage.setItem('events', JSON.stringify(json));
    } catch (error) {
        console.log(error);
    }
};
