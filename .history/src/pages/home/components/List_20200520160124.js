import React ,{PureComponent} from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render(){
    const { list,page } = this.props;
    return (
      <div>
        {
          list.map((item,index)=>{
            return (
            <Link key={index} to={'/detail/id' + item.get('id')}>
            <ListItem >
              <img className = 'pic' alt="c" src={item.get('imgUrl')}/>
              <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            </Link>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState  = (state)=>({
  list:state.get('home').get('articleList'),
  page:state.get('home').get('articlePage')
})

const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page));
  }
})
export default connect(mapState,mapDispatch)(List);