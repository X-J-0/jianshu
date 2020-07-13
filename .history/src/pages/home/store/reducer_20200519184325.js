import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[]
});


export default (state = defaultState,action)=>{
    if(action.type === actionTypes.CHANGE_HOME_DATA){
        return state.merge({
            topList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
    }
    return state;
}