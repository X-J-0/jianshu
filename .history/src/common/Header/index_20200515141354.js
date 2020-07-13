import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { Globalstyle } from '../../statics/iconfont/iconfont.js';
import { CSSTransition } from 'react-transition-group';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render(){
        return(
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
                    in={this.state.focused}
                    timeout={200}
                    classNames='slide'
                  >
                  <NavSearch
                    className={this.state.focused ? 'focused' : ''}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                  ></NavSearch>
                  </CSSTransition>
                  <Globalstyle/>
                  <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>
                      &#xe6e4;
                  </span>
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
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

