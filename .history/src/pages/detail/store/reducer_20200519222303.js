import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title:''
});


export default (state = defaultState,action)=>{

    return state;
}