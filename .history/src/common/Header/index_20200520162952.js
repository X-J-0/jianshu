import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {SearchInfoList,SearchInfoItem, SearchInfoSwitch,SearchInfoTitle,SearchInfo,HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { Globalstyle } from '../../statics/iconfont/iconfont.js';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component{
    getListArea(){
        const { page,totalPage,handleChangePage } = this.props;
        const jsList = this.props.list.toJS();
        const pageList = [];
        if(jsList.length){
        for(let i = (page-1) * 10; i<page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
         }
        }

        if(this.props.focused || this.props.mouseIn){
            return (
                <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
                >
                <SearchInfoTitle>
                     热门搜索
                     <SearchInfoSwitch onClick={() => handleChangePage(totalPage, page,this.spinIcon)}>
                         <span ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</span>
                         换一批
                     </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
    return (
    <HeaderWrapper>
    <Link to='/'>
        <Logo/>
    </Link>
    <Nav>
       <NavItem className='left active'>首页</NavItem> 
       <NavItem className='left'>下载</NavItem> 
       {
           this.props.login ? <NavItem className='right'>退出</NavItem>  :  <NavItem className='right'>登录</NavItem> 
       }
       <NavItem className='right'>登陆</NavItem> 
       <NavItem className='right'>
       <Globalstyle/>
       <span className="iconfont">&#xe636;</span>
       </NavItem> 
       <SearchWrapper>
       <CSSTransition
         in={this.props.focused}
         timeout={200}
         classNames='slide'
       >
       <NavSearch
         className={this.props.focused ? 'focused' : ''}
         onFocus={()=>this.props.handleInputFocus(this.props.list)}
         onBlur={this.props.handleInputBlur}
       ></NavSearch>
       </CSSTransition>
       <Globalstyle/>
       <span className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
           &#xe6e4;
       </span>
       {this.getListArea()}
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
}



const mapStateToProps = (state) => {
    return{
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.get('header').get('mouseIn'),
        login:state.get('login').get('login')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0){
            dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(totalPage, page,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

