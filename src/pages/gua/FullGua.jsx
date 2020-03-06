import React, { useEffect, useState } from 'react';
import SingleCard from "../../components/card/SingleCard";
import axios from 'axios';
import { Carousel } from 'antd';
import './FullGua.css';

const getRemoteDataList = (func) => {
    axios.get('https://www.fastmock.site/mock/152dc15209e2480ae6d8e3f7e23e0059/zhouyi/all')
        .then(response => {
            func(response.data);
        }).catch((err) => console.log(err));
}

const FullGua = () => {
    const [dataList, setDataList] = useState([])

    useEffect(() => { getRemoteDataList(setDataList) }, [])

    return (
        <div>
            <Carousel autoplay>
                {dataList.map(v => <SingleCard dataSource={v} key={Math.random() * 10000} />)}
            </Carousel>
        </div>
    );
}

export default FullGua;