import React, { Component }  from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style';

class Header extends Component{
    render(){
        return(
           <HeaderWrapper>
               <Logo href='/'/>
               <Nav>
                  <NavItem className='left active'>首页</NavItem> 
                  <NavItem className='left'>下载</NavItem> 
                  <NavItem className='right'>登陆</NavItem> 
                  <NavItem className='right'>Aa</NavItem> 
                  <NavSearch></NavSearch>
               </Nav>
               <Addition>
                   <Button className='reg'></Button>
                   <Button className='writting'></Button>
               </Addition>
           </HeaderWrapper> 
        )
    }
}

export default Header;

