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
        }
    ],
    articleList:[
        {
            id:1,
            title:'《纸短情长》民国60余封情书，教我明白什么是真正的爱情',
            desc:'文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。买来之后迫不...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/7289752-e2c35279dddf7fe9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
           id:2,
           title:'婚姻好不好，从女人的脸上就能知道',
           desc:'35岁的小许在一家宾馆做前台，如果她不说自己的年龄，你看她的脸至多二十七八岁。 但凡女人都想要自己永远保持年轻。可结婚几年后，你就会发现，一样的...',
           imgUrl:'https://upload-images.jianshu.io/upload_images/9070317-20250d650a0a267c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' 
        },
        {
            id:3,
            title:'读书变现技能养成记（二）——如何把读书升级成专业吸金技能',
            desc:'先要对职业读书人的背景有两个认识： 1、职业读书人得益于现代的信息爆炸，更侧重于筛选。所以职业读书人能产生拆选价值。 2、行业还处于野蛮生长期，..',
            imgUrl:'https://upload-images.jianshu.io/upload_images/2021661-5d0cd4fec1124745.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:4,
            title:'《纸短情长》民国60余封情书，教我明白什么是真正的爱情',
            desc:'文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。买来之后迫不...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/7289752-e2c35279dddf7fe9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
});


export default (state = defaultState,action)=>{

    return state;
}