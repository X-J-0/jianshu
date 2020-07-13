import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.div`
    color:#333;
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused  {
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg {
        color:#ec6149
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all .2s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            color:#fff;
            background:#777;
        }
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    height:100px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0, .2);

`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    font-size:13px;
    float:right;
`