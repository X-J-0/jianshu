import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
});


export default (state = defaultState,action)=>{
    if(action.type === actionTypes.CHANGE_HOME_DATA){
        return state.merge({
            topList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
    }
    if(action.type === actionTypes.ADD_ARTICLE_LIST){
        return state.merge({
            'articleList':state.get('articleList').concat(action.list),
            'articlePage':action.nextPage
        })

    }
    return state;
}