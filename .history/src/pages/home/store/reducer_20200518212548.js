import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[
        {
            id:1,
            title:'社会热点',
            imgUrl:'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1589812990033&amp;di=8b28fd3f8bc3ca3c9450b9f07b467abb&amp;imgtype=0&amp;src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190508%2F18%2F1557309685-GiDXShNogd.jpeg'
        },
        {
            id:2,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/element_origin_min_pic/16/12/08/2bdf6aec475e7972098520162cb7e938.jpg'
        },
        {
            id:3,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/back_pic/19/04/01/84bf4e664dd4984dd93d6dbfc22703fd.jpg'
        },
        {
            id:4,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/element_origin_min_pic/18/03/26/c845a539afe62df285c7a9490c74be65.jpg'
        },
        {
            id:5,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/back_pic/19/04/01/84bf4e664dd4984dd93d6dbfc22703fd.jpg'
        },
        {
            id:6,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/element_origin_min_pic/16/12/08/2bdf6aec475e7972098520162cb7e938.jpg'
        },
        {
            id:7,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/element_origin_min_pic/18/03/26/c845a539afe62df285c7a9490c74be65.jpg'
        },
        {
            id:8,
            title:'手绘',
            imgUrl:'http://bpic.588ku.com/element_origin_min_pic/16/12/08/2bdf6aec475e7972098520162cb7e938.jpg'
        },
    ]
});


export default (state = defaultState,action)=>{

    return state;
}