import axios from 'axios';

export const actionCreators = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            console.log(res.data.data);
        })
    }
}