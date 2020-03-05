import React, { Component } from 'react';
import SingleCard from "../../components/card/SingleCard";
import axios from 'axios';

class FullGua extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/152dc15209e2480ae6d8e3f7e23e0059/zhouyi/all')
            .then(response => {
                this.setState({
                    dataList: response.data
                })
            }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.dataList.map(v => <SingleCard dataList={v} />)}
            </div>
        );
    }
}

export default FullGua;