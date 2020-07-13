import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[]
});


export default (state = defaultState,action)=>{
    if(action.type === 'change_home_data'){
        return state.merge({
            topList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
    }
    return state;
}