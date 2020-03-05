import React, { useState } from 'react';
import SingleCard from "../../components/card/SingleCard";
import axios from 'axios';

const getDataList = (func) => {
    axios.get('https://www.fastmock.site/mock/152dc15209e2480ae6d8e3f7e23e0059/zhouyi/all')
        .then(response => {
            func(response.data);
        }).catch((err) => console.log(err));
}

const FullGua = () => {
    const [dataList, setDataList] = useState([])

    getDataList(setDataList)

    return (
        <div>
            {dataList.map(v => <SingleCard dataList={v} key={Math.random() * 10000} />)}
        </div>
    );
}

export default FullGua;