import React from 'react';
import { connect } from 'react-redux';
import {SearchInfoList,SearchInfoItem, SearchInfoSwitch,SearchInfoTitle,SearchInfo,HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { Globalstyle } from '../../statics/iconfont/iconfont.js';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
            <SearchInfoTitle>
                 热门搜索
                 <SearchInfoSwitch>
                     换一批
                 </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return null;
    }
}

const Header = (props) => {
    return (
    <HeaderWrapper>
    <Logo href='/'/>
    <Nav>
       <NavItem className='left active'>首页</NavItem> 
       <NavItem className='left'>下载</NavItem> 
       <NavItem className='right'>登陆</NavItem> 
       <NavItem className='right'>
       <Globalstyle/>
       <span className="iconfont">&#xe636;</span>
       </NavItem> 
       <SearchWrapper>
       <CSSTransition
         in={props.focused}
         timeout={200}
         classNames='slide'
       >
       <NavSearch
         className={props.focused ? 'focused' : ''}
         onFocus={props.handleInputFocus}
         onBlur={props.handleInputBlur}
       ></NavSearch>
       </CSSTransition>
       <Globalstyle/>
       <span className={props.focused ? 'focused iconfont' : 'iconfont'}>
           &#xe6e4;
       </span>
       {getListArea(props.focused)}
       </SearchWrapper>
    </Nav>
    <Addition>
         <Globalstyle/>
        <Button className='writting'><span className="iconfont">&#xe61b;</span>写文章</Button>
        <Button className='reg'>注册</Button>
    </Addition>
    </HeaderWrapper> 
    )
}



const mapStateToProps = (state) => {
    return{
        focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

