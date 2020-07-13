import {actionTypes} from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused:false,
    list:[]
});


export default (state = defaultState,action)=>{
    if(action.type === actionTypes.SEARCH_FOCUS){
        //immutable中的set方法会结合之前immutable对象的值
        //和设置的值，返回一个全新的对象
        return state.set('focused',true);
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused',false);
    }
    if(action.type === actionTypes.CHANGE_LIST){
        console.log(action);
    }
    return state;
}