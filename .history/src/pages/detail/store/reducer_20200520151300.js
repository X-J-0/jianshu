import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title:"衡水中学，被外地人占领的高考工厂",
    content:'<img alt="" src="http://upload-images.jianshu.io/upload_images/2021661-5d0cd4fec1124745.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/><p>职业读书人得益于现在的信息爆炸，更侧重于筛选，所以职业读书人能产生拆选价值</p><p>职业读书人得益于现在的信息爆炸，更侧重于筛选，所以职业读书人能产生拆选价值</p><p>职业读书人得益于现在的信息爆炸，更侧重于筛选，所以职业读书人能产生拆选价值</p><p>职业读书人得益于现在的信息爆炸，更侧重于筛选，所以职业读书人能产生拆选价值</p><p>职业读书人得益于现在的信息爆炸，更侧重于筛选，所以职业读书人能产生拆选价值</p>'
});


export default (state = defaultState,action)=>{
    if(action.type === actionTypes.CHANGE_DETAIL){
        return state.merge({
            title:action.title,
            content:action.content
        })
    }
    return state;
}