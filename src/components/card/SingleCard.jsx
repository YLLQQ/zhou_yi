import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    const datatList = props.dataList;
    const title = datatList.title;
    const yao = datatList.yao;

    return (
        <div>
            <div className="header">
                {title}
            </div>
            <div className="container">
                <div className="content">
                    {
                        yao.map(v =>
                            <div className="row">
                                {
                                    v.flag === 1 ?
                                        <div className="gYang" /> :
                                        v.flag === 0 ?
                                            <div className="gYin" >
                                                <div className="gLeft" />
                                                <div className="gMiddle" />
                                                <div className="gRight" />
                                            </div>
                                            :
                                            <div className="gWhite" />}
                                <div className="yi" >
                                    {v.yi}
                                </div>
                                <div className="xiang" >
                                    {v.xiang}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default SingleCard;