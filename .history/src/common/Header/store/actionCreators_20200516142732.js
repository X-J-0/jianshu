import {actionTypes} from './index';
import axios from 'axios';

export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
export const getList = () => {
    return(dispatch) => {
       axios.get('/api/headerList.json').then((res) => {
            console.log(res);
       }).catch(() => {
           console.log('error');
       })
    }
};