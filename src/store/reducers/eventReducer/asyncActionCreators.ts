import { setGuestsAction } from '.';
import { AppDispatch } from '../..';
import { UserService } from '../../../api/userService';

export const getGuests = () => async (dispatch: AppDispatch) => {
    try {
        const res = await UserService.getUsers();
        dispatch(setGuestsAction(res.data));
    } catch (error) {
        console.log(error);
    }
};
