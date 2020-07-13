import React, { Component }  from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import { Globalstyle } from '../../statics/iconfont/iconfont.js';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
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
                  <NavSearch></NavSearch>
                  <Globalstyle/>
                  <span className="iconfont">&#xe6e4;</span>
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

export default Header;

