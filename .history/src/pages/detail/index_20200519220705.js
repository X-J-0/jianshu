import React ,{Component} from 'react';
import {
  DetailWrapper,
  Header,
  Content
}from './style.js';
class Detail extends Component {
  render(){
    return (
        <DetailWrapper>
          <Header>衡水中学，被外地人占领的高考工厂</Header>
          <Content>
            <img alt="" src="http://upload-images.jianshu.io/upload_images/2021661-5d0cd4fec1124745.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"/>
          </Content>
        </DetailWrapper>
    )
  }
}

export default Detail;