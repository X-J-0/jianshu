import {actionTypes} from './index';

export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
export const getList = () => {
    return(dispatch) => {
        console.log(123);
    }
};