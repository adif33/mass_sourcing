import React from "react";
import axios from 'axios';

import Dishes from "../components/Dishes";

class DishList extends React.Component {

    state = {
        dishes: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/').then(res => {
            this.setState({
                dishes: res.data
            });
        });

    }

    render() {
        return (
            <Dishes
                data={this.state.dishes}
                />
        )
    }
}
export default DishList;