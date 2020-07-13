import {actionTypes} from './index';
import axios from 'axios';

export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
const changeList = (data) => ({
    type:'CHANGE_LIST',
    data
})
export const getList = () => {
    return(dispatch) => {
       axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
       }).catch(() => {
           console.log('error');
       })
    }
};