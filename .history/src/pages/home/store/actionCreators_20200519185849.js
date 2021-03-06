import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
    type:actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})
export const getHomeInfo = ()=> {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
          })
    }
}
export const getMoreList = () => {
    return (dispatch) =>{
        axios.get('api/homeList.json').then((res) => {
            const result = res.data.data;
            console.log(result);
          })
    }
}