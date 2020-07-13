import React ,{Component} from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';

import { HomeWrapper,
         HomeLeft,
         HomeRight,
         BackTop
} from './style';

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
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
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData();
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))

    }
  }
})

export default connect(mapState,mapDispatch)(Home);
