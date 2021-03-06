import React ,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
 } from './style';
class Login extends PureComponent {
  render(){
    return (
        <LoginWrapper>
        <LoginBox>
            <Input placeholder = '账号' innerRef={(input) => {this.account = input}}/>
            <Input placeholder = '密码' type='password' innerRef={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
        </LoginBox>
        </LoginWrapper>
    )
  }
}


const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        console.log(accountElem,passwordElem);
    }
})

export default connect(null,mapDispatch)(Login);