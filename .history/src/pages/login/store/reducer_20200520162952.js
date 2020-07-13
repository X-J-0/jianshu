import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    login:true
});


export default (state = defaultState,action)=>{
    
    return state;
}