import React ,{Component} from 'react';
import { RecommendWrapper,RecommendItem } from '../style.js';
import { connect } from 'react-redux';

class Recommend extends Component {
  render(){
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item)=>{
            return (
            <RecommendWrapper>
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            </RecommendWrapper>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
    list:state.get('home').get('recommendList')
})

export default connect(mapState)(Recommend);