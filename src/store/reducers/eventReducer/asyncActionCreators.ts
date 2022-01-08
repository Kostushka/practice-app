import axios from 'axios';
import { setGuestsAction } from '.';
import { AppDispatch } from '../..';

export const getGuests = () => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get('./users.json');
        dispatch(setGuestsAction(res.data));
    } catch (error) {
        console.log(error);
    }
};
