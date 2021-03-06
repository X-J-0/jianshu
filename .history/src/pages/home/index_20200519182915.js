import React ,{Component} from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import actionCreators from './store';

import { HomeWrapper,
         HomeLeft,
         HomeRight
} from './style';

class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="b" className="banner-img" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1589812990033&amp;di=8b28fd3f8bc3ca3c9450b9f07b467abb&amp;imgtype=0&amp;src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190508%2F18%2F1557309685-GiDXShNogd.jpeg" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null,mapDispatch)(Home);
