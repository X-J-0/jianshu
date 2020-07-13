import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:240px;
    float:right;
`;
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding: 20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    margin-bottom:18px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        margin-right:10px;
        display:block;
        width:32px;
        float:left;
        height:32px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;
export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
`;