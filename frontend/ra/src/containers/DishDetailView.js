import React from "react";
import axios from 'axios';

import {Card} from 'antd';

class DishDetail extends React.Component {

    state = {
        dish: {}
    };

    componentDidMount() {
        const dishID = this.props.match.params.dishID;
        axios.get(`http://127.0.0.1:8000/api/${dishID}`).then(res => {
            this.setState({
                dish: res.data
            });
        });

    }

    render() {
        return(
            <Card title={this.state.dish.title} >
            <p>{this.state.dish.content}</p>
            </Card>
        )
    }
}
export default DishDetail;